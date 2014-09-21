app.service('EventService', function (httpService, $http) {
    this.add = function(event){
        var params = {
            'name': event.name,
            'description': event.description,
            'location': event.location.id,
            'specials': event.specials,
            'date': event.date,
            'turnus': event.repeat.id,
            'hours': event.time
        };

        return httpService.angularPost('createEvent.php', params);
    };

    this.delete = function(event){
        var params = {
            'id': event.id
        };
        return httpService.angularPost('deleteEvent.php', params);
    };

    this.update = function(event){
        var params = {
            'id': event.id,
            'date': event.date,
            'time': event.time,
            'locationId': event.locationId,
            'name': event.name,
            'description': event.description,
            'specials': event.specials
        };

        return httpService.angularPost('updateEvent.php', params)
    };

    this.getEvents = function(event){
        return httpService.getFunction('getAllEvents.php');
    };

    this.createEvents = function(data){
        var events = []
        for (var n in data.idArray){
            var event = {
                id: data.idArray[n],
                date: data.dateArray[n],
                time: data.timeArray[n],
                locationId: data.locationIdArray[n],
                name: data.nameArray[n],
                description: data.descriptionArray[n],
                turnus: data.turnusArray[n],
                specials: data.specialsArray[n],
                likes: data.likesArray[n]
            };
            events.push(event);
        }
        return events;
    };

    this.events = [];
});
