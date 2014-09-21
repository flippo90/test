app.controller('eventDetailController', ['$rootScope', '$scope', '$route', '$location',  'DetailService',
    function ($rootScope, $scope, $route, $location, detailService) {
        $scope.detailService = detailService;

        $scope.myDetailEvent = $scope.detailService.event;
        $scope.myDetailLocation = $scope.detailService.location;

        $scope.comment = {
            text: "",
            writer: "",
            eventId: $scope.myDetailEvent.id
        };

        $scope.backToHome = function() {
            $location.path('/Overview');
        }
    }]);

