app.service('httpService', function ($http) {
    this.get = function(filename, successFunction){
        $http.get("Core/Php/" + filename).success(successFunction);
    };

    this.getFunction = function(filename){
        return $http.get("Core/Php/" + filename);
    };

    this.post = function(filename, params, successFunction){
        var dataStr = "";
        var firstEntry = true;
        Object.keys(params).forEach(function (key) {
            if (firstEntry){
                dataStr = "" + key + "=" + params[key];
            }else {
                dataStr = dataStr + "&" + key + "=" + params[key];
            }
            firstEntry = false;
        });

        $.ajax({
            type: "POST",
            url: "Core/Php/" + filename,
            data: dataStr,
            success: successFunction()
        });
    };

    this.angularPost = function(filename, params){
        var dataStr = "";
        var firstEntry = true;
        Object.keys(params).forEach(function (key) {
            if (firstEntry){
                dataStr = "" + key + "=" + params[key];
            }else {
                dataStr = dataStr + "&" + key + "=" + params[key];
            }
            firstEntry = false;
        });

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        return $http({method :'POST', url: 'Core/Php/' + filename, data: dataStr});

    };

    this.angularDelete = function(filename, params){
        var dataStr = "";
        var firstEntry = true;
        Object.keys(params).forEach(function (key) {
            if (firstEntry){
                dataStr = "" + key + "=" + params[key];
            }else {
                dataStr = dataStr + "&" + key + "=" + params[key];
            }
            firstEntry = false;
        });

        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        return $http({method :'DELETE', url: 'Core/Php/' + filename, data: dataStr});

    };

    this.getParamString = function(params){
        var dataStr = "";
        var firstEntry = true;
        Object.keys(params).forEach(function (key) {
            if (firstEntry) {
                dataStr = "" + key + "=" + params[key];
            } else {
                dataStr = dataStr + "&" + key + "=" + params[key];
            }
            firstEntry = false;
        });
        return dataStr;
    };
});
