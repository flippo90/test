
app.controller('createLocationController', function($scope, $http, httpService, databaseLocationService, $modal){


    /*$scope.result = '';
    $scope.details = '';
    $scope.options = {};*/

    $scope.savedLocation = "";

    $scope.location = {
        name: "",
        address: "",
        openingTime: "",
        coords: {
            lat : 0,
            long: 0
        }//,
        //type: $scope.locationTypes[0]
    };

    $scope.locations = function(){
        if (angular.isDefined(databaseLocationService.getAllLocations())){
            return databaseLocationService.refreshGridDataList(databaseLocationService.getAllLocations());;
        }
    };

    $scope.deleteLocation = function(location){
        databaseLocationService.deleteLocation(location)
            .then(function(data){
                console.log(data);
                //remove location from list
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
            databaseLocationService.updateLocation($scope.location)
                .then($modalInstance.close());
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};