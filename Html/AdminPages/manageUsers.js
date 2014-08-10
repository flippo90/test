app.controller('manageUsersController', ['$scope', '$http', 'AuthenticationService', function($scope, $http, AuthenticationService){
    $scope.user = {
        username: "",
        role: {
            name: ""
        },
        password: "",
        responsibilities: [],
        email:""
    };

    $scope.roles = [
        {name: "Admin"},
        {name: "Veranstalter"}
    ];

    $scope.locations = [];

    $scope.addUserGridOptions = {
        data: 'locations',
        columnDefs: [
            {field: 'locationId', visible: false},
            {field: 'name', displayName: 'Name'},
            {field: 'address', displayName: 'Adresse'}
        ],
        multiSelect: true,
        enableSorting: false,
        selectedItems: $scope.user.responsibilities
    };

    $scope.usersToDelete = [];

    $scope.deleteUserGridOptions = {
        data: 'allUsers',
        columnDefs: [
            {field: 'username', displayName: 'Name'},
            {field: 'role.name', displayName: 'Rolle'}
        ],
        multiSelect: true,
        enableSorting: false,
        selectedItems: $scope.usersToDelete
    };

    $scope.userToEdit = [];


    $scope.editUserGridOptions = {
        data: 'allUsers',
        columnDefs: [
            {field: 'id', visible: false},
            {field: 'username', displayName: 'Name'},
            {field: 'role.name', displayName: 'Rolle'}
        ],
        multiSelect: false,
        enableSorting: false,
        selectedItems: $scope.userToEdit
    };

    $http.get('Php/getAllLocations.php')
        .success(function (data) {
            if(angular.isUndefined(data.geoLocations)){
                alert("Es konnte keine Verbindung hergstellt werden. Bitte überprüfen Sie die Interneteinstellungen und starten Sie die Applikation erneut.");
            }
            else{
                $scope.createResponsibilityEntires(data);
            }
        });

    $scope.createResponsibilityEntires = function(data){
        for (var i in data.id){
            $scope.locations.push({locationId: data.id[i], name: data.names[i], address: data.address[i]})
        }
    };

    $scope.allUsers = AuthenticationService.getAllUsers();

    $scope.addUser = function(user){
        AuthenticationService.createUser(user);
        user.id = 0;
        user.email = "";
        user.password = "";

        /*angular.forEach($scope.locations, function(data, index){
            $scope.addUserGridOptions.selectItem(index, false);
        });*/

        user.responsibilities = [];
        user.username = "";
    };
    $scope.removeUser = function(){
        AuthenticationService.deleteUser($scope.usersToDelete);
        $scope.usersToDelete.length = 0;
    };

    $scope.updatedUser = {
        username: "",
        role: {
            name: ""
        },
        password: "",
        responsibilities: [],
        email:"",
        id: 0
    };

    $scope.saveChanges = function(userId){

        $scope.updatedUser.username = $scope.userToEdit[0].username;
        $scope.updatedUser.email = $scope.userToEdit[0].email;
        $scope.updatedUser.role = $scope.userToEdit[0].role;
        $scope.updatedUser.responsibilities = $scope.userToEdit[0].responsibilities;
        $scope.updatedUser.id = $scope.userToEdit[0].id;
        $scope.updatedUser.password = $scope.userToEdit[0].password;

        AuthenticationService.updateUser($scope.updatedUser);
    };

}]);