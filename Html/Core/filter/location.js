
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
                return 'http://localhost/llbec/Html/Common/Images/Circle_Green.png';
            }
            else{
                return 'http://localhost/llbec/Html/Common/Images/green-dot.png';
            }
        };
    }).
    filter('getIconFromFilterResultClub', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Common/Images/Circle_Blue.png';
            }
            else{
                return 'http://localhost/llbec/Html/Common/Images/blue-dot.png';
            }
        };
    }).
    filter('getIconFromFilterResultRestaurant', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Common/Images/Circle_Yellow.png';
            }
            else{
                return 'http://localhost/llbec/Html/Common/Images/yellow-dot.png';
            }
        };
    }).
    filter('getIconFromFilterResultOther', function(){
        return function(input) {
            if(input == null){
                return 'http://localhost/llbec/Html/Common/Images/Circle_Orange.png';
            }
            else{
                return 'http://localhost/llbec/Html/Common/Images/orange-dot.png';
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
