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
        filterService.mapLocations.clubs = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.clubs, filterChangedService.filterClubs);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterBars', function(){
        filterService.mapLocations.bars = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.bars, filterChangedService.filterBars);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterRestaurants', function(){
        filterService.mapLocations.restaurants = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.restaurants, filterChangedService.filterRestaurants);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterOther', function(){
        filterService.mapLocations.others = filterService.applyAllFiltersTo($scope.allLocationsInMaxRadius.others, filterChangedService.filterOther);
        $scope.refreshDataList();
    });

    $scope.$watch('filterChangedService.filterRadius', function() {
        if (filterChangedService.locationFilter == "byCurrentLocation"){
            filterService.mapLocations = filterService.applyFilterToAllLocations($scope.allLocationsInMaxRadius, filterService.mapLocations);
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
