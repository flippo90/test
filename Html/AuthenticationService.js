app.service('AuthenticationService', function ($rootScope, $location, $http, $route) {
    $rootScope.loggedInUser = null;
    $rootScope.errorMessage = "";
    $rootScope.users = [];
    $rootScope.finishDeleting = {value: false};

    this.login = function(credentials){
        $rootScope.errorMessage = ""
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

    $rootScope.getUsersFromDb = function(){
        $http.get("Php/getUsers.php")
            .success(function (data) {
                $rootScope.users.length = 0;

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
            });
    };

    this.getAllUsers = function(){
        return $rootScope.users;
    };

    this.logout = function(){
        $rootScope.errorMessage = "";
        $rootScope.loggedInUser = null;
        $location.path('Overview');
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

    this.createUser = function(user){
        var copie = $rootScope.copyValues(user);

        user.password = (Math.random() + 1).toString(36).substring(7);
        $.ajax({
            type: "POST",
            url: "Php/createUser.php",
            data: "name=" + user.username + "&email=" + user.email+
                "&password=" + user.password + "&role=" + user.role.name,
            success: function(msg)
            {
                $rootScope.getUsersFromDb();
                $rootScope.postResponsibilities(copie);
            }
        });
    };

    $rootScope.copyValues = function(user){
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

    $rootScope.postResponsibilities = function(copie){
        $http.get("Php/getUsers.php")
            .success(function (data) {
                for (var n in data.usernames) {
                    if(data.emails[n] == copie.email){
                        for (var i in copie.responsibilities){
                            $.ajax({
                                type: "POST",
                                url: "Php/addResponsibilities.php",
                                data: "locationId=" + copie.responsibilities[i].locationId + "&userId=" + data.ids[n],
                                success: function(msg)
                                {}
                            });
                        }
                        return;
                    }
                }
            });
    };

    $rootScope.getUserIdWithEmail = function(mail){
        for (var i in $rootScope.users){
            if ($rootScope.users[i].email == mail){
                return $rootScope.users[i].id;
            }
        }
    };

    this.deleteUser = function(userlist){
        for (var i in userlist){
            var id = userlist[i].id;
            $.ajax({
                type: "POST",
                url: "Php/deleteUser.php",
                data: "id=" + userlist[i].id,
                success: function(msg)
                {
                    $rootScope.removeResponsibilities(id);
                    $rootScope.getUsersFromDb();
                }
            });
        }
    };

    this.updateUser = function(user){
        $.ajax({
            type: "POST",
            url: "Php/updateUser.php",
            data: "id=" + user.id + "&name=" + user.username + "&email=" + user.email+
                "&password=" + user.password + "&role=" + user.role.name,
            success: function(msg)
            {
                $rootScope.getUsersFromDb();
            }
        });
    };

    $rootScope.removeResponsibilities = function(userId){
        $.ajax({
            type: "POST",
            url: "Php/removeResponsibilities.php",
            data: "&userId=" + userId,
            success: function(msg)
            {}
        });
    }

    $rootScope.getUsersFromDb();
});
