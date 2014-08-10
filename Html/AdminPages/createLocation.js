
app.controller('createLocationController', function($scope, $http){
    $scope.locationTypes = [];

    $http.get('Php/getAllTypes.php').success(function (data) {
        for (var loc in data.textArray){
            $scope.locationTypes.push({id:data.typeIdArray[loc], text:data.textArray[loc]})
        }
    });

    $scope.result = '';
    $scope.details = '';
    $scope.options = {};

    $scope.savedLocation = "";

    $scope.location = {
        name: "",
        address: "",
        openingTime: "",
        coords: {
            lat : 0,
            long: 0
        },
        type: $scope.locationTypes[0]
    };

    $scope.onCreateLocation = function(){
        $.ajax({
            type: "POST",
            url: "Php/createLocation.php",
            data: "locationName=" + $scope.location.name + "&geoLocation=" + $scope.details.geometry.location +
                "&type=" + $scope.location.type.id + "&openingHours=" + $scope.location.openingTime +
                "&address=" + $scope.details.formatted_address,
            success: function(msg)
            {
                alert("Location gespeichert!");
            }
        });

        console.log("button clicked");
    }



});