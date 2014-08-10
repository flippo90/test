app.service('filterChangedService', function () {
    this.filterBars = true;
    this.filterRestaurants = true;
    this.filterClubs = true;
    this.filterOther = true;
    this.filterRadius = 1;
    this.maximumFilterRadius = 10;
    this.centerCoords = {
            latitude: 0,
            longitude: 0
    };
    this.locationFilter = "byCurrentLocation";
    this.filterCity = "";
});

app.controller('filterController', function($scope, filterChangedService){
    $scope.filterChangedService = filterChangedService;

    $scope.result = '';
    $scope.details = '';
    $scope.options = { types: '(cities)'};

    $scope.setCurrentTime = function(){
        $scope.currentTime = function(){
            var date = new Date();
            var time = "" + date.getHours() + ":" + date.getMinutes();
            if (time == "00:00") //Could not get the time, return a default time.
                return "20:00";
            else
                return time;
        };
        $scope.filterChangedService.filterTime = $scope.currentTime();
    };

    $scope.setCurrentDate = function(){
        $scope.currentDate = function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd
            }
            if(mm<10){
                mm='0'+mm
            }

            var todayDate = yyyy + "-" + mm + "-" + dd;

            if (todayDate == "0000-00-00"){
                //Could not get current date
                alert("Es konnte kein aktuelle Datum ermittelt werden. Bitte eins eingeben");
            }

            return todayDate;
        };

        $scope.filterChangedService.filterDate = $scope.currentDate();
    };

    $scope.$watch('details', function(){
        if (!angular.isUndefined($scope.details))
            $scope.filterChangedService.filterCity = $scope.details.formatted_address;
    });

    $scope.setCurrentTime();
    $scope.setCurrentDate();
});
