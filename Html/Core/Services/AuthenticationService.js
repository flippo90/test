app.service('AuthenticationService', function ($rootScope, $location, $route, $q, $http, httpService) {
    $rootScope.loggedInUser = null;
    $rootScope.errorMessage = "";
    $rootScope.users = [];
    $rootScope.finishDeleting = {value: false};

    this.login = function(credentials){
        $rootScope.errorMessage = "";
        for(var i in $rootScope.users){
            if ($rootScope.users[i].username == credentials.username && $rootScope.users[i].password == credentials.password){
                $rootScope.loggedInUser = $rootScope.users[i];
                $location.path('/Overview');
            }
        }

        if ($rootScope.loggedInUser == null){
            $rootScope.errorMessage = "Falsche Benutzerdaten";
        }
    };

    this.logout = function(){
        $rootScope.errorMessage = "";
        $rootScope.loggedInUser = null;
        $location.path('Overview');
    };

    this.getUsersFromDb = function(){
        httpService.getFunction('getUsers.php').then(function(data){
            getUsersSuccess(data);
        });
    };

    this.createUser = function(user) {
        $rootScope.copie = this.copyValues(user);
        user.password = this.generateRandomPassword();

        var params = {
            'name': user.username,
            'email': user.email,
            'password': user.password,
            'role': user.role.name
        };

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http({method: 'POST', url: 'Core/Php/createUser.php', data: httpService.getParamString(params)})
            .then(function(data){
                getUsersFromDb();
                postResponsibilities($rootScope.copie);
        });
    };

    this.generateRandomPassword = function(){
        return (Math.random() + 1).toString(36).substring(7);
    };

    this.copyValues = function(user){
        function copyList(source) {
            var result = [];
            for (var i in source) {
                result.push({locationId: source[i].locationId})
            }
            return result;
        }

        return {
            username: user.username,
            id: user.id,
            email: user.email,
            password: user.password,
            responsibilities: copyList(user.responsibilities)
        };
    };

    var postResponsibilities = function(copie){
        httpService.getFunction('getUsers.php').then(function(response){
            var data = response.data;
            for (var n in data.usernames) {
                if(data.emails[n] == copie.email){
                    for (var i in copie.responsibilities){
                        var params = {
                            'locationId': copie.responsibilities[i].locationId,
                            'userId': data.ids[n]
                        };

                        httpService.angularPost('addResponsibilities.php', params).then(function(data){
                        });
                    }
                    return;
                }
            }
        });
    };

    this.deleteUser = function(userlist){
        for (var i in userlist){
            $rootScope.thisIdShouldNotGoLikeThisIntoMethod = userlist[i].id;

            var params = {
                'id': userlist[i].id
            };

            httpService.angularPost('deleteUser.php', params).then(function(){
                removeResponsibilities($rootScope.thisIdShouldNotGoLikeThisIntoMethod);
                getUsersFromDb();
            });
        }
    };

    this.updateUserSuccess = function(msg){
        alert("Änderung gespeichert");
        getUsersFromDb();
    };

    this.updateUser = function(user){
        var params = {
            'id': user.id,
            'name': user.username,
            'email': user.email,
            'password': user.password,
            'role': user.role.name
        };

        httpService.post('updateUser.php', params, this.updateUserSuccess);
    };

    var removeResponsibilities = function(userId){
        var params = {
            'userId': userId
        };

        httpService.angularPost('removeResponsibilities.php', params);
    };

    var getUsersSuccess = function (response) {
        $rootScope.users.length = 0;
        var data = response.data;
        for (var n in data.usernames) {
            var user = {
                id: data.ids[n],
                username: data.usernames[n],
                password: data.passwords[n],
                role: {
                    name: data.roles[n]
                },
                responsibilities: [],
                email: data.emails[n]
            };

            $rootScope.users.push(user);
        }
        httpService.getFunction('getAllResponsabilities.php').then(getResponsabilitiesSuccess);
    };

    var getResponsabilitiesSuccess = function(data){
        for (var i in data.ids){
            var user = getUserById(data.users[i]);
            user.responsibilities.push({locationId: data.locations[i]});
        }
    };

    var getUserById = function(id){
        for (var i in $rootScope.users){
            if (users[i].id == id){
                return users[i];
            }
        }
    };

    this.getAllUsers = function(){
        return $rootScope.users;
    };

    this.isUserLoggedIn = function(){
        return ($rootScope.loggedInUser != null);
    };

    this.getUserName = function(){
        return $rootScope.loggedInUser.username;
    };

    this.getErrorMessage = function(){
        return $rootScope.errorMessage;
    };

    this.userIsAdmin = function(){
        if ($rootScope.loggedInUser == null)
            return false;

        return ($rootScope.loggedInUser.role.name == "Admin");
    };
});
