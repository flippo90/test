/*
 This controller is responsible for the filter

 if any filter changes, the controller is responsible to call the functions that update
 the data.
 */

app.controller('filterController', function($scope, filterChangedService, $filter, filterService, helperService){
    $scope.result = '';
    $scope.details = '';
    $scope.options = { types: '(cities)'};

    filterChangedService.filterTime = helperService.getCurrentTime();
    filterChangedService.filterDate = helperService.getCurrentDate();
    $scope.$watch('details', function(){
        if (!angular.isUndefined($scope.details))
            filterChangedService.filterCity = $scope.details.formatted_address;
    });

    $scope.$watch('filterChangedService.filterClubs', function(){
        $scope.mapLocations.clubs = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.clubs, filterChangedService.filterClubs);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterBars', function(){
        $scope.mapLocations.bars = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.bars, filterChangedService.filterBars);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterRestaurants', function(){
        $scope.mapLocations.restaurants = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.restaurants, filterChangedService.filterRestaurants);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterOther', function(){
        $scope.mapLocations.others = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.others, filterChangedService.filterOther);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterRadius', function() {
        if (filterChangedService.locationFilter == "byCurrentLocation"){
            $scope.mapLocations = filterService.applyFilterToAllLocations($scope.allLocationsInMaxRadius, $scope.mapLocations);
            $scope.refreshDataList();
            $scope.filterTableData();
        }
    });

    $scope.$watch('filterChangedService.filterCity', function(){
        if ($scope.filterChangedService.locationFilter == "byCity"){
            $scope.filterByCity();
        }
    });

    $scope.$watch('filterChangedService.locationFilter', function(){
        if ($scope.filterChangedService.locationFilter == "byCity"){
            $scope.filterByCity();
        }else{
            $scope.getData();
        }
    });

    $scope.filterByCity = function(){
        if (!angular.isUndefined($scope.filterChangedService.filterCity)){
            $scope.filterChangedService.filterRadius = 0;
            $scope.getData();
        }
    };

    $scope.$watch('filterChangedService.filterDate', function(){
        $scope.filterTableData();
    });

    $scope.$watch('filterChangedService.filterByTime', function(){
        $scope.filterTableData();
    });
});
