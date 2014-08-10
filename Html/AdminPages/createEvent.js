
app.controller('createEventController', function($scope, $http, AuthenticationService){
    $scope.locations = [];

    $scope.turnus = [];
    $scope.turnus.push({id: 0, name:"Keine"});
    $scope.turnus.push({id: 1, name:"Woechentlich"});
    $scope.turnus.push({id: 2, name:"Zwei Woechentlich"});
    $scope.turnus.push({id: 3, name:"Monatlich"});
    $http.get('Php/getAllLocations.php').success(function (data) {
        for (var loc in data.id){
            $scope.locations.push({id:data.id[loc], name:data.names[loc]})
        }
    });

    $scope.result = '';
    $scope.details = '';
    $scope.options = {};

    $scope.savedLocation = "";

    $scope.event = {
        name: "",
        description: "",
        location: $scope.locations[0],
        specials: "",
        date: "",
        repeat: $scope.turnus[0],
        time: ""
    };

    $scope.onCreateLocation = function(){
        $.ajax({
            type: "POST",
            url: "Php/createEvent.php",
            data: "name=" + $scope.event.name + "&descirption=" + $scope.event.description+
                "&location=" + $scope.event.location.id + "&specials=" + $scope.event.specials +
                "&date=" + $scope.event.date + "&turnus=" + $scope.event.repeat.id + "&hours=" + $scope.event.time,
            success: function(msg)
            {
                alert("Event gespeichert!");
            }
        });

        console.log("button clicked");
    };

    $scope.userIsAdmin = function(){
        return AuthenticationService.userIsAdmin();
    };

});