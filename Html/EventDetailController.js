app.controller('eventDetailController', ['$rootScope', '$scope', '$route', '$http',  'DetailService',
    function ($rootScope, $scope, $route, $http, detailService) {
        $scope.detailService = detailService;

        $scope.myDetailEvent = $scope.detailService.event;
        $scope.myDetailLocation = $scope.detailService.location;

        $scope.comment = {
            text: "",
            writer: "",
            eventId: $scope.myDetailEvent.id
        };

      $scope.reloadEventRoute = function() {

            $route.reload();
            console.log("reloading");}
    }]);

