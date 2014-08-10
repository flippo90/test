
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{name: 'Kyle Hayhurst', age: 25, interest: 'Javascript', id: 1},
                     {name: 'Jimmy Hampton', age: 25, interest: 'HTML', id: 3},
                     {name: 'Tim Sweet', age: 27, interest: 'HTML', id: 4},
                     {name: 'Jonathon Ricaurte', age: 29, interest: 'CSS', id: 6},
                     {name: 'Brian Hann', age: 28, interest: 'PHP', id: 2}];
    $scope.gridOptions = { 
        data: 'myData',
        showGroupPanel: true,
        columnDefs: [{field: 'name', displayName: 'Name'},
            {field: 'age', displayName: 'Age'},
            {field: 'interest', displayName: 'Interest'},
            {displayName: 'Options', cellTemplate: '<input type="button" name="view" onclick="alert(\'You clicked view on item ID: {{row.entity.id}} \')" value="View">&nbsp;<input type="button" name="edit" onclick="alert(\'You clicked edit on item ID: {{row.entity.id}} \')" value="Edit">&nbsp;<input type="button" onclick="alert(\'You clicked delete on item ID: {{row.entity.id}} \')" name="delete" value="Delete">'}
            ]
    };
});