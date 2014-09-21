/*
 this is the controller for the location details.
 */

app.controller('locationDetailController', ['$rootScope', '$scope', '$location', '$routeParams', '$route', 'DetailService', 'filterService',
    function ($rootScope, $scope, $location, $routeParams, $route, detailService, filterService) {
        $scope.detailService = detailService;
        $scope.myDetailLocation = $scope.detailService.location;

        $scope.convertedType = convertType($scope.myDetailLocation.type);

        function convertType(typeNumber){
            if (typeNumber == 1){
                return "Restaurant";
            } else if (typeNumber == 2){
                return "Bar";
            } else if (typeNumber == 3){
                return "Club";
            } else if (typeNumber == 4){
                return "Sonstiges";
            }
        }

        $scope.mySelectedEvent = [];
        $scope.eventList = $scope.myDetailLocation.locEvents;
        $scope.eventGridOptions = {
            data: 'eventList',
            columnDefs: [
                {field: 'id', visible: false},
                {field: 'name', displayName: 'Event', width: "50%"},
                {field: 'date', displayName: 'Datum', width:"25%"},
                {field: 'time', displayName: 'Uhrzeit', width:"20%"}
            ],
            multiSelect: false,
            enableSorting: false,
            selectedItems: $scope.mySelectedEvent
        };

        $scope.$watch('mySelectedEvent[0]', function(){
            if ($scope.mySelectedEvent != null && !angular.isUndefined($scope.mySelectedEvent[0])){
                var event = getEventWithId($scope.mySelectedEvent[0].id);

                $scope.detailService.location = $scope.myDetailLocation;
                $scope.detailService.event = event;
                $location.path('EventDetail');
            }
        });

        function getEventWithId(id) {
            for (var i in $scope.myDetailLocation.locEvents) {
                var event = $scope.myDetailLocation.locEvents[i];
                if (event.id == id) {
                    return event;
                }
            }
            alert("Shoult not happen. every id in table should be in the detail location events list")
        }

        $scope.backToHome = function() {
            $location.path('/Overview');
        }
    }]);
