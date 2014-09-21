app.controller('TableController', ['$rootScope', '$scope', '$location', 'filterChangedService', 'DetailService',
    function ($rootScope, $scope, $location, filterChangedService, detailService) {
        $scope.detailService = detailService;
        $scope.mySelections = [];

        $scope.filterOptions = {
            filterText: ''
        };

        $scope.gridOptions = {
            data: 'gridList',
            columnDefs: [
                {visible: false, field: 'locationId'},
                {field: 'name', displayName:'Name', cellTemplate: '<div ng-class="{green: row.getProperty(\'type\') == 2, yellow: row.getProperty(\'type\') == 1, blue: row.getProperty(\'type\') == 3, orange: row.getProperty(\'type\') == 4 }"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},
                {field: 'address', displayName:'Adresse', cellTemplate: '<div ng-class="{green: row.getProperty(\'type\') == 2, yellow: row.getProperty(\'type\') == 1, blue: row.getProperty(\'type\') == 3, orange: row.getProperty(\'type\') == 4 }"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},
                {visible: false, field: 'type', displayName:'Typ', cellTemplate: '<div ng-class="{green: row.getProperty(col.field) == 2, yellow: row.getProperty(col.field) == 1, blue: row.getProperty(col.field) == 3, orange: row.getProperty(col.field) == 4 }"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},
                {visible: false, field: 'event', displayName:'Event', cellTemplate: '<div ng-class="{green: row.getProperty(\'type\') == 2, yellow: row.getProperty(\'type\') == 1, blue: row.getProperty(\'type\') == 3, orange: row.getProperty(\'type\') == 4 }"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},
                {visible: false, field: 'eventObject.id', displayName:'Event Id', cellTemplate: '<div ng-class="{none: row.getProperty(\'eventObject.id\') == null, green: row.getProperty(\'type\') == 2, yellow: row.getProperty(\'type\') == 1, blue: row.getProperty(\'type\') == 3, orange: row.getProperty(\'type\') == 4 }"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},
                {field: 'eventObject.name', displayName:'Event Name', cellTemplate: '<div ng-class="{none: row.getProperty(\'eventObject.id\') == null, green: row.getProperty(\'type\') == 2, yellow: row.getProperty(\'type\') == 1, blue: row.getProperty(\'type\') == 3, orange: row.getProperty(\'type\') == 4 }"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}
            ],
            multiSelect: false,
            enableSorting: false,
            selectedItems: $scope.mySelections,
            filterOptions: $scope.filterOptions
        };


        $scope.filterNephi = function() {
            var filterText = 'name:Nephi';
            if ($scope.filterOptions.filterText === '') {
                $scope.filterOptions.filterText = filterText;
            }
            else if ($scope.filterOptions.filterText === filterText) {
                $scope.filterOptions.filterText = '';
            }
        };

        $scope.$watch('mySelections[0]', function(){
            if ($scope.mySelections != null && !angular.isUndefined($scope.mySelections[0])){
                var location = getLocationById($scope.mySelections[0].locationId);
                $scope.detailService.location = location;
                if ($scope.mySelections[0].event==false){
                    $location.path('LocationDetail');
                }else{
                    $scope.detailService.event = location.eventObject;
                    $location.path('EventDetail');
                }
            }
        });

        function getLocationById(id){
            for (var n in $scope.gridList){
                if ($scope.gridList[n].locationId == id){
                    return $scope.gridList[n];
                }
            }
            alert("Every entry should be in the gridList");
            return null;
        }
    }]);