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
        templateUrl: 'Core/Directives/commentTemplate.html',
        controller: ['$scope', '$http', '$route', 'httpService', function($scope, $http, $route, httpService) {
            $scope.uploadFile = function(files){
                $scope.file = files[0];
            };

            $scope.onPostComment = function(text, writer) {
                if ($scope.ngLocation){
                    var phpFileUrl = "postLocationComment.php";
                    var targetId = $scope.ngTarget.locationId;
                }else{
                    var phpFileUrl = "postEventComment.php";
                    var targetId = $scope.ngTarget.id;
                }

                var params = {
                    'text': text,
                    'writer': writer,
                    'targetId': targetId,
                    'filename': $scope.file.name
                };

                $scope.successfullyPostedComments =function(data)
                {
                    $scope.ngTarget.comments.unshift({id: 0, text: $scope.text, eventId: 0, writer: $scope.writer, timestamp: 'jetzt', filePath: $scope.file.name});

                    $scope.file.name = "";
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
                            timestamp: data.timestamps[n],
                            filePath: data.filename[n]
                        };

                        if (comment.eventId == targetId){
                            $scope.ngTarget.comments.push(comment);
                        }
                    }
                };

                httpService.get(phpFileUrl, $scope.successfullyLoadedComments);
            };

            $scope.existingFilepath = function(filepath){
                console.log(filepath);
                return (filepath != null && filepath != "");
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
