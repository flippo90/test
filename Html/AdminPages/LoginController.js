app.controller('loginController', function($scope, AuthenticationService){
    $scope.credentials = {
        username: "",
        passowrd: ""
    };

    $scope.hasErrorMessage = function(){
        console.log(AuthenticationService.getErrorMessage());
        console.log(AuthenticationService.getErrorMessage() != "");
        $scope.errorMessage = AuthenticationService.getErrorMessage();

        return (AuthenticationService.getErrorMessage() != "");
    };

    $scope.login = function(){
        AuthenticationService.login($scope.credentials);
    }
});