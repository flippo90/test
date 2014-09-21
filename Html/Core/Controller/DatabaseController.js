app.controller('databaseController', ['$rootScope', '$scope', '$filter', '$q', 'filterChangedService', 'httpService', 'databaseLocationService', 'filterService',
    function ($rootScope, $scope,  $filter, $q, filterChangedService, httpService, databaseLocationService, filterService) {

        $scope.filterChangedService = filterChangedService;
        $scope.filterService = filterService;

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
                    $scope.initDataObjects();
                    $scope.allLocationsInMaxRadius = databaseLocationService.createLocationsFromDbData(promise.data);
                    filterService.mapLocations = filterService.applyFilterToAllLocations($scope.allLocationsInMaxRadius, filterService.mapLocations);
                })
                .then(function(){
                    databaseLocationService.getEventData()
                        .then(function(promise){
                            databaseLocationService.createEvents(promise.data, filterService.mapLocations);
                            databaseLocationService.createEvents(promise.data, $scope.allLocationsInMaxRadius);
                        })
                        .then(function(){
                            $scope.refreshDataList();
                            $scope.filterTableData();
                        });
                });
        };

        $scope.refreshDataList = function(){
            $scope.gridList = databaseLocationService.refreshGridDataList(filterService.mapLocations);
        };

        $scope.filterTableData = function(){
            $scope.gridList = filterService.filterDataByDateAndTime($scope.gridList);
        };

        $scope.initDataObjects = function(){
            $scope.allLocationsInMaxRadius.bars.length = 0;
            $scope.allLocationsInMaxRadius.clubs.length = 0;
            $scope.allLocationsInMaxRadius.restaurants.length = 0;
            $scope.allLocationsInMaxRadius.others.length = 0;

            filterService.mapLocations.bars.length = 0;
            filterService.mapLocations.clubs.length = 0;
            filterService.mapLocations.restaurants.length = 0;
            filterService.mapLocations.others.length = 0;
        }
    }]);
