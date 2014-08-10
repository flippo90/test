app.controller('dataFilterController', ['$rootScope', '$scope', '$filter', 'filterChangedService', '$http',
    function ($rootScope, $scope, $filter, filterChangedService, $http) {

        $scope.filterChangedService = filterChangedService;

        $scope.$watch('filterChangedService.filterClubs', function(){
            $scope.mapLocations.clubs = $scope.filterListByTypeVisibility($scope.allLocationsInMaxRadius.clubs, $scope.mapLocations.clubs,
                $scope.filterChangedService.filterClubs, 1);
        });
        $scope.$watch('filterChangedService.filterBars', function(){
            $scope.mapLocations.bars = $scope.filterListByTypeVisibility($scope.allLocationsInMaxRadius.bars, $scope.mapLocations.bars,
                $scope.filterChangedService.filterBars, 2);
        });

        $scope.$watch('filterChangedService.filterRestaurants', function(){
            $scope.mapLocations.restaurants = $scope.filterListByTypeVisibility($scope.allLocationsInMaxRadius.restaurants, $scope.mapLocations.restaurants,
                $scope.filterChangedService.filterRestaurants, 3);
        });

        $scope.$watch('filterChangedService.filterOther', function(){
            $scope.mapLocations.others = $scope.filterListByTypeVisibility($scope.allLocationsInMaxRadius.others, $scope.mapLocations.others,
                $scope.filterChangedService.filterOther, 4);
        });

        $scope.filterListByTypeVisibility = function(sourceList, resultList, visible, type){
            /*console.log(sourceList);
            console.log(resultList);
            console.log(visible);
            console.log(type);*/
            if (visible){
                $scope.resetVisibleAttribute(sourceList, visible);

                if($scope.filterChangedService.locationFilter == "byCity"){
                    resultList = $filter('byCity')(sourceList, $scope.filterChangedService.filterCity);
                } else{
                    resultList = $filter('byDistance')(sourceList, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                }

                $scope.createEvents($scope.rawDbEventData, type);
                $scope.refreshDataList();
            } else{
                resultList.length = 0;
            }

            //console.log(resultList);
            return resultList;
        };

        $scope.$watch('filterChangedService.filterRadius', function(){
            if ($scope.filterChangedService.locationFilter == "byCurrentLocation"){
                $scope.mapLocations.bars = $filter('byDistance')( $scope.allLocationsInMaxRadius.bars, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.mapLocations.clubs = $filter('byDistance')( $scope.allLocationsInMaxRadius.clubs, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.mapLocations.restaurants = $filter('byDistance')( $scope.allLocationsInMaxRadius.restaurants, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.mapLocations.others = $filter('byDistance')( $scope.allLocationsInMaxRadius.others, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.refreshDataList();
            }
        });

        $scope.$watch('filterChangedService.filterCity', function(){
            if ($scope.filterChangedService.locationFilter == "byCity"){
                if (!(angular.isUndefined($scope.filterChangedService.filterCity))){
                    $scope.filterByCity();
                }
            }
        });

        $scope.$watch('filterChangedService.locationFilter', function(){
            if ($scope.filterChangedService.locationFilter == "byCurrentLocation"){
                if ($scope.filterChangedService.filterRadius == 0){
                    //$scope.filterChangedService.filterRadius = 1;
                }
                $scope.getData();
            }else{
                $scope.filterByCity();
            }
        });

        $scope.filterByCity = function(){
            if (!angular.isUndefined($scope.filterChangedService.filterCity)){
                $scope.filterChangedService.filterRadius = 0;
                $scope.getData();
            }
        };

        $scope.$watch('mapLocations.bars.length', function(){
            $scope.refreshDataList();
        });

        $scope.$watch('mapLocations.others.length', function(){
            $scope.refreshDataList();
        });

        $scope.$watch('mapLocations.clubs.length', function(){
            $scope.refreshDataList();
        });

        $scope.$watch('mapLocations.restaurants.length', function(){
            $scope.refreshDataList();
        });

        $scope.$watch('filterChangedService.filterTime', function(){
            $scope.filterTableData();
        });

        $scope.$watch('filterChangedService.filterDate', function(){
            $scope.filterTableData();
        });

        $scope.$watch('filterChangedService.filterByTime', function(){
            $scope.filterTableData();
        });

        $scope.resetVisibleAttribute = function(list, visible){
            for (var i in list){
                list[i].options.visible = visible;
            }
        };
    }]);

angular.module('locationFilters', []).
    filter('byDate', function(){
        return function(input, filterDate) {
            for (var i in input){
                if (input[i].date == filterDate){
                    return input[i];
                }
            }
            return null;
        };
    }).
    filter('getIconFromFilterResultBar', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Images/Circle_Green.png';
            }
            else{
                return 'http://localhost/llbec/Html/Images/green-dot.png';
            }
        };
    }).
    filter('getIconFromFilterResultClub', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Images/Circle_Blue.png';
            }
            else{
                return 'http://localhost/llbec/Html/Images/blue-dot.png';
            }
        };
    }).
    filter('getIconFromFilterResultRestaurant', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Images/Circle_Yellow.png';
            }
            else{
                return 'http://localhost/llbec/Html/Images/yellow-dot.png';
            }
        };
    }).
    filter('getIconFromFilterResultOther', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Images/Circle_Orange.png';
            }
            else{
                return 'http://localhost/llbec/Html/Images/orange-dot.png';
            }
        };
    }).
    filter('byTime', function() {
        return function(input, filterTime, filterByTime) {

            if (input == null)
                return null;

            if (!filterByTime)
                return input;

            var time = filterTime.split(":");
            var timeInt = parseInt(time[0]);

            var timeSpanArray = input.time.split("-");

            var start = parseInt(timeSpanArray[0]);
            var end = parseInt(timeSpanArray[1]);
            // wenn ein Event in 2 Stunden beginnt wird es auch noch angezeigt.
            if (timeInt >= start - 2 && timeInt < end){
                return input;
            }

            return null
        };
    }).
    filter('byCity', function() {
        return function(locationList, city) {
            var filterResult = [];
            for(var i in locationList) {
                if (locationList[i].address.indexOf(" " + city) > -1) {
                    filterResult.push(locationList[i]);
                }
            }
            return filterResult;

        };
    }).
    filter('byDistance', function() {
        return function(locationList, centerLocationString, allowedDistance) {
            var filterResult = [];
            for(var i = locationList.length - 1; i >= 0; i--) {
                var rad = function(x) {
                    return x * Math.PI / 180;
                };

                var locationCoords = {
                    latitude: parseFloat(locationList[i].coords.latitude),
                    longitude: parseFloat(locationList[i].coords.longitude)
                };

                var centerLocationCoords = {
                    latitude: parseFloat(centerLocationString.latitude),
                    longitude: parseFloat(centerLocationString.longitude)
                };

                var R = 6378137; // Earth’s mean radius in meter
                var dLat = rad(centerLocationCoords.latitude - locationCoords.latitude);
                var dLong = rad(centerLocationCoords.longitude - locationCoords.longitude);
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(locationCoords.latitude)) * Math.cos(rad(centerLocationCoords.latitude)) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                if (d/1000 < allowedDistance){
                    filterResult.push(locationList[i]);
                }
            }
            return filterResult;
        };
    });




