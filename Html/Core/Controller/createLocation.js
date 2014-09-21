
app.controller('createLocationController', function($scope, $http, httpService, databaseLocationService, $modal){

    $scope.savedLocation = "";
    $scope.locationList = [];

    $scope.location = {
        name: "",
        address: "",
        openingTime: "",
        coords: {
            lat : 0,
            long: 0
        }
    };

    $scope.setLocations = function(){
        if (angular.isDefined(databaseLocationService.getAllLocations())){
            $scope.locationList = databaseLocationService.refreshGridDataList(databaseLocationService.getAllLocations());
        }
    };

    $scope.locations = function(){
        return $scope.locationList;
    };

    $scope.deleteLocation = function(location){
        databaseLocationService.deleteLocation(location)
            .success(function(data){
                $scope.locationList.splice($scope.locationList.indexOf(location), 1);
            });
    };

    $scope.open = function (location, mode) {
        $scope.location = location;
        var modalInstance = $modal.open({
            templateUrl: 'Core/Controller/myModalContent.html',
            controller: ModalInstanceCtrl,
            resolve: {
                location: function () {
                    return $scope.location;
                },
                edit: function(){
                    return mode;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            //console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.setLocations();
});

var ModalInstanceCtrl = function ($scope, $modalInstance, httpService, databaseLocationService, location, edit) {
    $scope.edit = edit;
    $scope.location = location;
    $scope.details = '';
    $scope.options = {};
    $scope.result = '';

    $scope.locationTypes = [];

    httpService.getFunction('getAllTypes.php').success(function (data) {
        for (var loc in data.textArray){
            $scope.locationTypes.push({id:data.typeIdArray[loc], text:data.textArray[loc]})
        }
    });

    $scope.save = function () {

        if (!edit){
            $scope.location.address = $scope.details.formatted_address;
            $scope.location.geoLocation = $scope.details.geometry.location;
            databaseLocationService.createLocation($scope.location)
                .then($modalInstance.close());
        } else{
            databaseLocationService.updateLocation($scope.location).success(function(){
                console.log($scope.location);
                $modalInstance.close();
            });
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};