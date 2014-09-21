app.directive('ngComment', function() {
    return {
        restrict: 'E',
        require:
            ['^ngTarget',
            '^ngLocation'],
        scope: {
            ngTarget: '=',
            ngLocation: '='
        },
        template:
            '<details>' +
                '<summary>Kommentare</summary>' +
                '<div class="padding-10">' +
                    '<input type="text" class="form-control margin-bottom-5" placeholder="Text" ng-model="text">' +
                    '<div class="input-group">' +
                        '<input type="text" class="form-control" placeholder="Username" ng-model="writer">' +
                        '<a href="" class="input-group-addon" ng-click="onPostComment(text, writer, imageData)">Posten</a>' +
                    '</div>' +
                    '<input type="file" name="file" onchange="angular.element(this).scope().uploadFile(this.files)"/>' +
                '</div>' +
                '<ul class="list-group details" style="padding-left: 10px">' +
                    '<li ng-repeat="myComment in ngTarget.comments" class="list-group-item">{{myComment.text}} | {{myComment.writer}}' +
                        '<label class="navbar-right comment-time" role="button" href="#">{{myComment.timestamp}}</label>' +
                    '</li>' +
                '</ul>' +
            '</details>',
        controller: ['$scope', '$http', '$route', 'httpService', function($scope, $http, $route, httpService) {
            $scope.uploadFile = function(files){
                $scope.file = files[0];
                $scope.fd = new FormData();
                //Take the first selected file
                $scope.fd.append("file", files[0])
            };

            $scope.onPostComment = function(text, writer, imageData) {
                if ($scope.ngLocation){
                    var phpFileUrl = "postLocationComment.php"
                    var targetId = $scope.ngTarget.locationId;
                }else{
                    var phpFileUrl = "postEventComment.php"
                    var targetId = $scope.ngTarget.id;
                }

                var params = {
                    'text': text,
                    'writer': writer,
                    'targetId': targetId,
                    'fileName': ''
                };

                $scope.successfullyPostedComments =function(data)
                {
                    $scope.ngTarget.comments.unshift({id: 0, text: $scope.text, eventId: 0, writer: $scope.writer, timestamp: 'jetzt'});

                    $scope.writer = "";
                    $scope.text = "";
                };

                httpService.post(phpFileUrl, params, $scope.successfullyPostedComments);
            };

            $scope.getLocationComments = function() {
                $scope.ngTarget.comments = [];

                if ($scope.ngLocation){
                    var phpFileUrl = "loadCommentsForLocation.php";
                    var targetId = $scope.ngTarget.locationId;
                }else{
                    var phpFileUrl = "loadCommentsForEvent.php";
                    var targetId = $scope.ngTarget.id;
                }

                $scope.successfullyLoadedComments = function (data) {
                    for (var n in data.commentIds) {

                        var comment = {
                            id: data.commentIds[n],
                            text: data.texts[n],
                            eventId: data.myEvents[n],
                            writer: data.writers[n],
                            timestamp: data.timestamps[n]
                        };


                        if (comment.eventId == targetId){
                            $scope.ngTarget.comments.push(comment);
                        }
                    }
                };

                httpService.get(phpFileUrl, $scope.successfullyLoadedComments);
            };

            $scope.getLocationComments();
        }]
    }
});

app.directive('ngTarget', function() {
    return {
        controller: function($scope) {}
    }
});

app.directive('ngLocation', function() {
    return {
        controller: function($scope) {}
    }
});
