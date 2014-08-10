app.directive('ngComment', ['$location', function($rootScope, $location) {
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
                        '<a href="" class="input-group-addon" ng-click="onPostComment(text, writer)">Posten</a>' +
                    '</div>' +
                '</div>' +
                '<ul class="list-group details" style="padding-left: 10px">' +
                    '<li ng-repeat="myComment in ngTarget.comments" class="list-group-item">{{myComment.text}} | {{myComment.writer}}' +
                        '<label class="navbar-right comment-time" role="button" href="#">{{myComment.timestamp}}</label>' +
                    '</li>' +
                '</ul>' +
            '</details>',
        controller: ['$scope', '$http', '$route', function($scope, $http, $route) {
            $scope.onPostComment = function(text, writer) {
                if ($scope.ngLocation){
                    var phpFileUrl = "Php/postLocationComment.php"
                    var targetId = $scope.ngTarget.locationId;
                }else{
                    var phpFileUrl = "Php/postEventComment.php"
                    var targetId = $scope.ngTarget.id;
                }

                $.ajax({
                    type: "POST",
                    url: phpFileUrl,
                    data: "text=" + text + "&writer=" + writer + "&targetId=" + targetId,
                    success: function(data)
                    {
                        $scope.writer = "";
                        $scope.text = "";
                        $scope.getLocationComments();
                    }
                });

            };

            $scope.getLocationComments = function() {
                $scope.ngTarget.comments = [];

                if ($scope.ngLocation){
                    var phpFileUrl = "Php/loadCommentsForLocation.php";
                    var targetId = $scope.ngTarget.locationId;
                }else{
                    var phpFileUrl = "Php/loadCommentsForEvent.php";
                    var targetId = $scope.ngTarget.id;
                }

                $http.get(phpFileUrl)
                    .success(function (data) {
                        for (var n in data.commentIds) {
                            var comment = {
                                id: data.commentIds[n],
                                text: data.texts[n],
                                eventId: data.myEvents[n],
                                writer: data.writers[n],
                                timestamp: data.timestamps[n]
                            };

                            if (comment.eventId == targetId){
                                console.log("pushing comment: " + comment);
                                $scope.ngTarget.comments.push(comment);
                            }
                        }
                    });
            };

            $scope.getLocationComments();
        }]
    }
}]);

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
