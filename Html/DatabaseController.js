app.controller('databaseController', ['$rootScope', '$scope', '$filter', 'filterChangedService', '$http',
    function ($rootScope, $scope,  $filter, filterChangedService, $http) {

        $scope.rawDbLocationData = [];
        $scope.rawDbEventData = [];
        $scope.filterChangedService = filterChangedService;

        $scope.mapLocations = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };

        $scope.allLocationsInMaxRadius = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };

        $scope.getData = function(){
            $http.get('Php/getAllLocations.php')
                .success(function (data) {
                    if(angular.isUndefined(data.geoLocations)){
                        alert("Es konnte keine Verbindung hergstellt werden. Bitte überprüfen Sie die Interneteinstellungen und starten Sie die Applikation erneut.");
                    }
                    else{
                        $scope.rawDbLocationData = data;
                        $scope.createLocationsFromDbData(data);
                    }
                })
        };

        $scope.createLocationsFromDbData = function (data){
            $scope.allLocationsInMaxRadius.bars.length = 0;
            $scope.allLocationsInMaxRadius.clubs.length = 0;
            $scope.allLocationsInMaxRadius.restaurants.length = 0;
            $scope.allLocationsInMaxRadius.others.length = 0;

            for (var n in data.id) {

                var lat = data.geoLocations[n].slice(1).split(',')[0];
                var long = data.geoLocations[n].slice(1).split(',')[1];

                var location = {};
                var imagePath = null;
                if(data.types[n] == 2){
                    imagePath = 'http://localhost/llbec/Html/Images/Circle_Green.png';
                    location = $scope.createLocation(data.id[n], $scope.filterChangedService.filterBars, data.names[n], data.types[n], data.address[n], lat, long, imagePath);
                    $scope.allLocationsInMaxRadius.bars.push(location);
                } else if (data.types[n]== 1){
                    imagePath = 'http://localhost/llbec/Html/Images/Circle_Blue.png';
                    location = $scope.createLocation(data.id[n], $scope.filterChangedService.filterClubs, data.names[n], data.types[n], data.address[n], lat, long, imagePath);
                    $scope.allLocationsInMaxRadius.clubs.push(location);
                } else if (data.types[n] == 3){
                    imagePath = 'http://localhost/llbec/Html/Images/Circle_Orange.png';
                    location = $scope.createLocation(data.id[n], $scope.filterChangedService.filterRestaurants, data.names[n], data.types[n], data.address[n], lat, long, imagePath);
                    $scope.allLocationsInMaxRadius.restaurants.push(location);
                } else if (data.types[n] == 4){
                    imagePath = 'http://localhost/llbec/Html/Images/Circle_Yellow.png';
                    location = $scope.createLocation(data.id[n], $scope.filterChangedService.filterOther, data.names[n], data.types[n], data.address[n], lat, long, imagePath);
                    $scope.allLocationsInMaxRadius.others.push(location);
                } else{
                    throw ("location has no type");
                }
            }

            $scope.mapLocations.bars.length = 0;
            $scope.mapLocations.clubs.length = 0;
            $scope.mapLocations.restaurants.length = 0;
            $scope.mapLocations.others.length = 0;

            if ($scope.filterChangedService.locationFilter == "byCurrentLocation"){
                $scope.mapLocations.bars = $filter('byDistance')( $scope.allLocationsInMaxRadius.bars, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.mapLocations.others = $filter('byDistance')( $scope.allLocationsInMaxRadius.others, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.mapLocations.restaurants = $filter('byDistance')( $scope.allLocationsInMaxRadius.restaurants, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
                $scope.mapLocations.clubs = $filter('byDistance')( $scope.allLocationsInMaxRadius.clubs, $scope.filterChangedService.centerCoords, $scope.filterChangedService.filterRadius);
            } else{
                $scope.mapLocations.bars = $filter('byCity')( $scope.allLocationsInMaxRadius.bars, $scope.filterChangedService.filterCity);
                $scope.mapLocations.others = $filter('byCity')( $scope.allLocationsInMaxRadius.others, $scope.filterChangedService.filterCity);
                $scope.mapLocations.restaurants = $filter('byCity')( $scope.allLocationsInMaxRadius.restaurants, $scope.filterChangedService.filterCity);
                $scope.mapLocations.clubs = $filter('byCity')( $scope.allLocationsInMaxRadius.clubs, $scope.filterChangedService.filterCity);
            }

            $scope.showEventsOnMap();
        };

        $scope.createLocation = function(id, visible, name, type, address, lat, long, imagePath){
            var location = {
                locationId: id,
                event: false,
                eventObject: null,
                locEvents: [],
                coords: {
                    latitude: lat,
                    longitude: long
                },
                options: {
                    visible: visible
                },
                name: name,
                type: type,
                address: address,
                comments: [],
                imagePath: imagePath
            };
            return location;
        };

        $scope.showEventsOnMap = function (){
            $http.get('Php/getAllEvents.php')
                .success(function (data) {
                    if(angular.isUndefined(data.idArray)){
                        alert("Es konnte keine Verbindung hergstellt werden. Bitte überprüfen Sie die Interneteinstellungen und starten Sie die Applikation erneut.");
                    }
                    else{
                        $scope.rawDbEventData = data;
                        $scope.createEvents(data, 0);
                    }
                })
        };

        $scope.createEvents = function (data, type){
            for (var n in data.idArray){
                var location = getLocationWithId(data.locationIdArray[n]);

                if (location != null){
                    var image = null;
                    if(location.type == 2){
                        image = 'http://localhost/llbec/Html/Images/green-dot.png';
                    } else if (location.type== 1){
                        image = 'http://localhost/llbec/Html/Images/blue-dot.png';
                    } else if (location.type == 3){
                        image = 'http://localhost/llbec/Html/Images/orange-dot.png';
                    } else if (location.type == 4){
                        image = 'http://localhost/llbec/Html/Images/yellow-dot.png';
                    }

                    var event = {
                        id: data.idArray[n],
                        date: data.dateArray[n],
                        time: data.timeArray[n],
                        locationId: data.locationIdArray[n],
                        name: data.nameArray[n],
                        description: data.descriptionArray[n],
                        turnus: data.turnusArray[n],
                        specials: data.specialsArray[n],
                        likes: data.likesArray[n],
                        comments: [],
                        imagePath: image,
                        locationName: location.name
                    };
                    location.locEvents.push(event);
                }
            }
            //Es muss einmal manuell aufgerufen werden, da die $watch methoden der filtereinstellungen beim ersten mal nicht aufgerufen werden
            $scope.refreshDataList();
            $scope.filterTableData();
        };

        $scope.gridList = [];

        $scope.refreshDataList = function(){
            var n = 0;
            $scope.gridList = [];
            for (var i in $scope.mapLocations.bars){
                if ($scope.mapLocations.bars[i].options.visible){
                    $scope.gridList[n] = $scope.mapLocations.bars[i];
                    n = n+1;
                }
            }

            for (var i in $scope.mapLocations.restaurants){
                if ($scope.mapLocations.restaurants[i].options.visible) {
                    $scope.gridList[n] = $scope.mapLocations.restaurants[i];
                    n = n + 1;
                }
            }

            for (var i in $scope.mapLocations.clubs){
                if ($scope.mapLocations.clubs[i].options.visible) {
                    $scope.gridList[n] = $scope.mapLocations.clubs[i];
                    n = n + 1;
                }
            }

            for (var i in $scope.mapLocations.others){
                if ($scope.mapLocations.others[i].options.visible) {
                    $scope.gridList[n] = $scope.mapLocations.others[i];
                    n = n + 1;
                }
            }
        }

        $scope.filterTableData = function(){
            for(var i in $scope.gridList)
            {
                var filterResult = $filter('byDate')($scope.gridList[i].locEvents, $scope.filterChangedService.filterDate);
                var nextFilterResult = $filter('byTime')(filterResult, $scope.filterChangedService.filterTime, $scope.filterChangedService.filterByTime);
                $scope.gridList[i].eventObject = nextFilterResult;

                // check filename!!!!!!
                if (nextFilterResult != null){
                    $scope.gridList[i].event = true;
                }
                else{
                    $scope.gridList[i].event = false;
                }
            }
        };

        function getLocationWithId(id){
            for (var i in $scope.mapLocations.restaurants){
                var restaurant = $scope.mapLocations.restaurants[i];
                if (restaurant.locationId == id){
                    return restaurant;
                }
            }

            for (var i in $scope.mapLocations.bars){
                if ($scope.mapLocations.bars[i].locationId == id){
                    return $scope.mapLocations.bars[i];
                }
            }

            for (var i in $scope.mapLocations.others){
                if ($scope.mapLocations.others[i].locationId == id){
                    return $scope.mapLocations.others[i];
                }
            }

            for (var i in $scope.mapLocations.clubs){
                if ($scope.mapLocations.clubs[i].locationId == id){
                    return $scope.mapLocations.clubs[i];
                }
            }

            return null;
        }
    }]);
