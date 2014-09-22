/*
 This controller holds the data shown in the map and the table
 */

app.controller('databaseController', ['$rootScope', '$scope', '$filter', '$q', 'filterChangedService', 'httpService', 'databaseLocationService', 'filterService',
    function ($rootScope, $scope,  $filter, $q, filterChangedService, httpService, databaseLocationService, filterService) {

        $scope.filterChangedService = filterChangedService;
        $scope.filterService = filterService;

        $scope.mapLocations = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };

        $scope.$on('destroy', function(){
            filterChangedService.filterBars = false;
            filterChangedService.filterClubs = false;
            filterChangedService.filterOther = false;
            filterChangedService.filterRestaurants = false;

            $scope.initDataObjects();
        });

        $scope.allLocationsInMaxRadius = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };

        $scope.gridList = [];

        $scope.getData = function(){
            databaseLocationService.getData()
                .then(function(promise){
                    $scope.allLocationsInMaxRadius = databaseLocationService.createLocationsFromDbData(promise.data);
                    $scope.mapLocations = filterService.applyFilterToAllLocations($scope.allLocationsInMaxRadius, $scope.mapLocations);
                })
                .then(function(){
                    databaseLocationService.getEventData()
                        .then(function(promise){
                            databaseLocationService.createEvents(promise.data, $scope.mapLocations);
                            databaseLocationService.createEvents(promise.data, $scope.allLocationsInMaxRadius);
                        })
                        .then(function(){
                            $scope.refreshDataList();
                            $scope.filterTableData();
                        });
                });
        };

        $scope.refreshDataList = function(){
            $scope.gridList = databaseLocationService.refreshGridDataList($scope.mapLocations);
        };

        $scope.filterTableData = function(){
            $scope.gridList = filterService.filterDataByDateAndTime($scope.gridList);
        };

        $scope.initDataObjects = function(){
            $scope.allLocationsInMaxRadius.bars.length = 0;
            $scope.allLocationsInMaxRadius.clubs.length = 0;
            $scope.allLocationsInMaxRadius.restaurants.length = 0;
            $scope.allLocationsInMaxRadius.others.length = 0;

            $scope.mapLocations.bars.length = 0;
            $scope.mapLocations.clubs.length = 0;
            $scope.mapLocations.restaurants.length = 0;
            $scope.mapLocations.others.length = 0;
        };
    }]);
