app.controller('mapController', ['$rootScope', '$scope', '$location', '$filter', 'filterChangedService', '$http', 'DetailService', '$cookieStore',
function ($rootScope, $scope, $location, $filter, filterChangedService, $http, detailService, $cookieStore) {
    $scope.detailService = detailService;

    function showCurrentLocation()
    {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(locationFound);
        }
        else{
            throw("Geolocation is not supported by this browser.");
        }
    }

    function locationFound(position)
    {
        if ($scope.map.center.latitude == 0 || $scope.map.center.longitude == 0){
            $scope.map.center.latitude = position.coords.latitude;
            $scope.map.center.longitude = position.coords.longitude;
        }

        if ($scope.map.zoom == 0){
            $scope.map.zoom = 15;
        }

        $scope.map.userCoords.latitude = position.coords.latitude;
        $scope.map.userCoords.longitude = position.coords.longitude;

        $scope.filterChangedService.centerCoords = $scope.map.userCoords;

        $scope.drawFilterCircle();
        $scope.getData();
    }

    var zoom = $cookieStore.get('mapZoom');
    if (angular.isUndefined(zoom)){
        zoom = 0;
    }

    var center = $cookieStore.get('mapCenter');

    if(angular.isUndefined(center)){
        lat = 0;
        long = 0;
    }
    else{
        lat = center.latitude;
        long = center.longitude;
    }

    $scope.map = {
        center: {
            latitude: lat,
            longitude: long
        },
        zoom: zoom,
        userCoords: {
            latitude: 0,
            longitude: 0
        },
        control: {}
    };

    $scope.$watch('map.center.latitude', function(){
        $cookieStore.put('mapCenter', $scope.map.center);
    });

    $scope.$watch('map.center.longitude', function(){
        $cookieStore.put('mapCenter', $scope.map.center);
    });

    $scope.$watch('map.zoom', function(){
        $cookieStore.put('mapZoom', $scope.map.zoom);
    });

    showCurrentLocation();

    $scope.markerClicked = function(location) {
        $scope.detailService.location = location;
        if (location.event==false){
            $location.path('LocationDetail');
        }else{
            $scope.detailService.event = location.eventObject;
            $location.path('EventDetail');
        }
    };

    $scope.$watch('filterChangedService.filterRadius', function(){
        $scope.drawFilterCircle();
    });

    $scope.drawFilterCircle = function(){
        if ($scope.marker != undefined)
            $scope.marker.setMap(null);

        var loc = new google.maps.LatLng($scope.map.userCoords.latitude, $scope.map.userCoords.longitude);
        $scope.marker = new google.maps.Circle({
            center: loc,
            radius: filterChangedService.filterRadius * 1000,
            fillColor: "grey",
            fillOpacity: 0.3,
            strokeOpacity: 0.0,
            strokeWeight: 0,
            map: $scope.map.control.getGMap()
        });
    };

    $scope.removeFilterCircle = function(){
        $scope.marker.setMap(null);
    }
}]);

