app.service('databaseLocationService', function ($http, httpService, filterChangedService) {
    var allLocationsInMaxRadius = {
        bars: [],
        restaurants: [],
        clubs: [],
        others: []
    };

    this.getAllLocations = function(){
        return allLocationsInMaxRadius;
    };

    this.getData = function(){
        return $http.get('Core/Php/getAllLocations.php');
    };

    this.createLocationsFromDbData = function(data){
        allLocationsInMaxRadius.bars.length = 0;
        allLocationsInMaxRadius.clubs.length = 0;
        allLocationsInMaxRadius.restaurants.length = 0;
        allLocationsInMaxRadius.others.length = 0;

        for (var n in data.id) {

            var lat = data.geoLocations[n].slice(1).split(',')[0];
            var long = data.geoLocations[n].slice(1).split(',')[1];

            var location = {};
            var imagePath = null;
            if (data.types[n] == 2) {
                imagePath = 'http://localhost/llbec/Html/Common/Images/Circle_Green.png';
                location = createLocation(data.id[n], filterChangedService.filterBars, data.names[n], data.types[n], data.address[n], lat, long, imagePath, data.openingHours[n]);
                allLocationsInMaxRadius.bars.push(location);
            } else if (data.types[n] == 1) {
                imagePath = 'http://localhost/llbec/Html/Common/Images/Circle_Blue.png';
                location = createLocation(data.id[n], filterChangedService.filterClubs, data.names[n], data.types[n], data.address[n], lat, long, imagePath, data.openingHours[n]);
                allLocationsInMaxRadius.clubs.push(location);
            } else if (data.types[n] == 3) {
                imagePath = 'http://localhost/llbec/Html/Common/Images/Circle_Orange.png';
                location = createLocation(data.id[n], filterChangedService.filterRestaurants, data.names[n], data.types[n], data.address[n], lat, long, imagePath, data.openingHours[n]);
                allLocationsInMaxRadius.restaurants.push(location);
            } else if (data.types[n] == 4) {
                imagePath = 'http://localhost/llbec/Html/Common/Images/Circle_Yellow.png';
                location = createLocation(data.id[n], filterChangedService.filterOther, data.names[n], data.types[n], data.address[n], lat, long, imagePath, data.openingHours[n]);
                allLocationsInMaxRadius.others.push(location);
            } else {
                throw ("location has no type");
            }
        }

        return allLocationsInMaxRadius;
    };

    function createLocation(id, visible, name, type, address, lat, long, imagePath, openingHours){
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
            imagePath: imagePath,
            openingHours: openingHours
        };
        return location;
    }

    this.getEventData = function(){
        return $http.get('Core/Php/getAllEvents.php');
    };

    this.createEvents = function (data, locations){
        for (var n in data.idArray){
            var location = getLocationWithId(data.locationIdArray[n], locations);

            if (location != null){
                var image = null;
                if(location.type == 2){
                    image = 'http://localhost/llbec/Html/Common/Images/green-dot.png';
                } else if (location.type== 1){
                    image = 'http://localhost/llbec/Html/Common/Images/blue-dot.png';
                } else if (location.type == 3){
                    image = 'http://localhost/llbec/Html/Common/Images/orange-dot.png';
                } else if (location.type == 4){
                    image = 'http://localhost/llbec/Html/Common/Images/yellow-dot.png';
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

        function getLocationWithId(id, mapLocations){
            for (var i in mapLocations.restaurants){
                var restaurant = mapLocations.restaurants[i];
                if (restaurant.locationId == id){
                    return restaurant;
                }
            }

            for (var i in mapLocations.bars){
                if (mapLocations.bars[i].locationId == id){
                    return mapLocations.bars[i];
                }
            }

            for (var i in mapLocations.others){
                if (mapLocations.others[i].locationId == id){
                    return mapLocations.others[i];
                }
            }

            for (var i in mapLocations.clubs){
                if (mapLocations.clubs[i].locationId == id){
                    return mapLocations.clubs[i];
                }
            }

            return null;
        }

    };

    this.refreshGridDataList = function(dataList){
        var result = [];
        for (var i in dataList.bars){
            if (dataList.bars[i].options.visible){
                result.push(dataList.bars[i]);
            }
        }

        for (var i in dataList.restaurants){
            if (dataList.restaurants[i].options.visible) {
                result.push(dataList.restaurants[i]);
            }
        }

        for (var i in dataList.clubs){
            if (dataList.clubs[i].options.visible) {
                result.push(dataList.clubs[i]);
            }
        }

        for (var i in dataList.others){
            if (dataList.others[i].options.visible) {
                result.push(dataList.others[i]);
            }
        }
        return result;
    };

    this.createLocation = function(location){
        var params = {
            'locationName': location.name,
            'geoLocation': location.geoLocation,
            'type': location.type.id,
            'openingHours': location.openingTime,
            'address': location.address
        };

        return httpService.angularPost('createLocation.php', params);
    };

    this.updateLocation = function(location){
        var params = {
            'id': location.locationId,
            'name': location.name,
            'openingTime': location.openingHours
        };

        return httpService.angularPost('updateLocation.php', params);
    };

    this.deleteLocation = function(location){

        var params = {
            'id': location.locationId
        };
        return httpService.angularPost('deleteLocation.php', params);
    }
});
