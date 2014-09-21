app.controller('manageUsersController', ['$scope', '$http', 'AuthenticationService', 'databaseLocationService', function($scope, $http, AuthenticationService, databaseLocationService){
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
            {field: 'email', displayName: 'Email'},
            {field: 'role.name', displayName: 'Rolle'}
        ],
        multiSelect: false,
        enableSorting: false,
        selectedItems: $scope.usersToDelete
    };

    $scope.userToEdit = [];
    $scope.editUserGridOptions = {
        data: 'allUsers',
        columnDefs: [
            {field: 'id', visible: false},
            {field: 'username', displayName: 'Name'},
            {field: 'email', displayName: 'Email'},
            {field: 'role.name', displayName: 'Rolle'}
        ],
        multiSelect: false,
        enableSorting: false,
        selectedItems: $scope.userToEdit
    };

    databaseLocationService.getData().success(function(data){
        $scope.createLocationEntries(data);
    });

    $scope.createLocationEntries = function(data){
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
        $scope.addUserGridOptions.selectAll(false);
        user.username = "";
        user.role = "";
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

    AuthenticationService.getUsersFromDb();

}]);