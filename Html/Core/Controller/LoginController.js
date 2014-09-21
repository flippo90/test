/*
 this controller is responsible for the login
 */

app.controller('loginController', function($scope, AuthenticationService){
    $scope.credentials = {
        username: "",
        passowrd: ""
    };

    $scope.hasErrorMessage = function(){
        $scope.errorMessage = AuthenticationService.getErrorMessage();
        return (AuthenticationService.getErrorMessage() != "");
    };

    $scope.login = function(){
        AuthenticationService.login($scope.credentials);
    };

    AuthenticationService.getUsersFromDb();
});