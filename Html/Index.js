var app = angular.module('llbec', ['google-maps', 'ngAutocomplete', 'locationFilters', 'ngGrid', 'ngCookies', 'ui.bootstrap']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/adminPages/createEvent', {
                templateUrl: 'Views/AdminPages/createEvent.html',
                controller: 'createEventController'
            }).
            when('/adminPages/createLocation', {
                templateUrl: 'Views/AdminPages/createLocation.html',
                controller: 'createLocationController'
            }).
            when('/adminPages/manageUsers', {
                templateUrl: 'Views/AdminPages/manageUsers.html',
                controller: 'manageUsersController'
            }).
            when('/adminPages/login', {
                templateUrl: 'Views/AdminPages/Login.html',
                controller: 'loginController'
            }).
            when('/Overview', {
                templateUrl: 'Views/Overview.html',
                controller: 'sectionController'
            }).
            when('/EventDetail', {
                templateUrl: 'Views/EventDetail.html',
                controller: 'eventDetailController'
            }).
            when('/LocationDetail', {
                templateUrl: 'Views/LocationDetail.html',
                controller: 'locationDetailController'
            }).
            otherwise({
                redirectTo: '/Overview'
            });
    }]);

app.controller('logoutController', ['$scope', 'AuthenticationService', function($scope, AuthenticationService){
    $scope.logout = function(){
        AuthenticationService.logout();
    };

    $scope.checkUser = function(){
        return AuthenticationService.isUserLoggedIn();
    };

    $scope.getUserName = function(){
        if ($scope.checkUser()){
            return AuthenticationService.getUserName();
        }
    };

    $scope.userIsAdmin = function(){
        return AuthenticationService.userIsAdmin();
    }
}]);

app.controller('sectionController', ['$scope', '$cookieStore', 'AuthenticationService', function($scope, $cookieStore, AuthenticationService){
    var checked = $cookieStore.get('view');
    if (!angular.isUndefined(checked))
        $scope.checked = checked;

    $scope.$watch('checked', function(){
        $cookieStore.put('view', $scope.checked);
    });

    $scope.sections = {
        mainSection: {
            css: "section-main"
        },
        einstellungenSection: {
            css: "section-einstellungen"
        },
        filterSection: {
            css: "section-suche"
        }
    };

    $scope.activateSuche = function(){
        if ( $scope.sections.filterSection.css == 'active') {
            $scope.sections.filterSection.css = "";
        } else {
            $scope.sections.filterSection.css = "active";
        }
        $scope.sections.einstellungenSection.css = "";
    };

    $scope.activateEinstellungen = function(){
        if ( $scope.sections.einstellungenSection.css == 'active') {
            $scope.sections.einstellungenSection.css = "";
        } else {
            $scope.sections.einstellungenSection.css = "active";
        }
        $scope.sections.filterSection.css = "";
    };
}]);