
app.controller('createEventController', function($scope, $http, AuthenticationService, httpService, EventService){
    $scope.locations = [];

    $scope.turnus = [];
    $scope.turnus.push({id: 0, name:"Keine"});
    $scope.turnus.push({id: 1, name:"Woechentlich"});
    $scope.turnus.push({id: 2, name:"Zwei Woechentlich"});
    $scope.turnus.push({id: 3, name:"Monatlich"});
    httpService.getFunction('getAllLocations.php').success(function (data) {
        for (var loc in data.id){
            $scope.locations.push({id:data.id[loc], name:data.names[loc]})
        }
    });

    $scope.events = [];

    $scope.getEvents = function(){
        EventService.getEvents().then(function(response){
            $scope.events = EventService.createEvents(response.data)
        });
    };

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
        EventService.add($scope.event).then(function(){
            $scope.getEvents();
        });
    };

    $scope.removeEvent = function(){
        EventService.delete($scope.eventToDelete[0]).then(function(){
            $scope.getEvents();
        });
    };

    $scope.userIsAdmin = function(){
        return AuthenticationService.userIsAdmin();
    };

    $scope.editEvent = function(){
        EventService.update($scope.eventToUpdate[0]).then(function(){
            $scope.getEvents();
        });
    };

    $scope.filterOptions = {
        filterText: ''
    };

    $scope.eventToDelete = [];

    $scope.editEventGridOptions = {
        data: 'events',
        columnDefs: [
            {field: 'id', visible: false},
            {field: 'name', displayName: "Name"},
            {field: 'date', displayName: 'Datum'},
            {field: 'time', displayName: 'Zeit'},
            {field: 'locationId', displayName: 'Location'}
        ],
        multiSelect: false,
        enableSorting: false,
        selectedItems: $scope.eventToDelete,
        filterOptions: $scope.filterOptions
    };

    $scope.deleteFilterOptions = {
        filterText: ''
    };

    $scope.eventToUpdate = [];
    $scope.editEventGridOptions = {
        data: 'events',
        columnDefs: [
            {field: 'id', visible: false},
            {field: 'name', displayName: "Name"},
            {field: 'date', displayName: 'Datum'},
            {field: 'time', displayName: 'Zeit'},
            {field: 'specials', displayName: 'Specials'},
            {field: 'description', displayName: 'Beschreibung'},
            {field: 'locationId', displayName: 'Location'}
        ],
        multiSelect: false,
        enableSorting: false,
        selectedItems: $scope.eventToUpdate,
        filterOptions: $scope.deleteFilterOptions
    };

    $scope.itemSelected = function(){
            return ($scope.eventToUpdate.length != 0);
    };

    $scope.getEvents();
});