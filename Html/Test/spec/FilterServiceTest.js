var events = [
    {id:1, date:"01.01.2014", time:"8-12", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:2, date:"02.01.2014", time:"7-8", locationId:2, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:3, date:"03.01.2014", time:"2-4", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:4, date:"01.01.2014", time:"4-6", locationId:2, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:5, date:getCurrentDate(), time:getTimeSpanFromNowPlusTwo(), locationId:3, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:6, date:getCurrentDate(), time:getTimeSpanFromNowPlusTwo(), locationId:3, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:7, date:"01.01.2020", time:getTimeSpanFromNowPlusTwo(), locationId:3, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:8, date:getCurrentDate(), time:"30-34", locationId:3, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
];

var locations = [
    {locationId: 1, address:"Gasse 2, Ulm, Deutschland", coords: {latitude: 48.396754, longitude: 9.989834}, event: false, eventObject: null, locEvents: [events[7], events[2]], options: {visible: false}, name: "", type: 2, comments: [], imagePath: ""},
    {locationId: 2, address:"Gasse 2, Neu-Ulm, Deutschland", coords: {latitude: 48.39857, longitude: 10.006020}, event: false, eventObject: null, locEvents: [events[1], events[4]], options: {visible: false}, name: "", type: 2, comments: [], imagePath: ""},
    {locationId: 3, address:"Gasse 2, Ulm, Deutschland", coords: {latitude: 48.400884, longitude: 9.991201}, event: false, eventObject: null, locEvents: [events[5], events[6],events[0], events[3]], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
    {locationId: 4, address:"Gasse 2, Laupheim, Deutschland", coords: {latitude: 48.2181674, longitude: 9.87372}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 2, comments: [], imagePath: ""},
    {locationId: 5, address:"Neue Ulmer Strasse 10, Laupheim, Deutschland", coords: {latitude: 48.247387, longitude: 10.358719}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
];

var mapLocations = {
    bars: [locations[1], locations[3], locations[0]],
    clubs: [locations[2], locations[4]],
    others: [],
    restaurants: []
};

describe('filterService', function() {
    beforeEach(function () {
        module("llbec");
    });

    it('sets the Event object if matches date and time filter', inject(function(filterService, filterChangedService){
        filterChangedService.filterDate = getCurrentDate();
        filterChangedService.filterTime = getCurrentTime();
        filterChangedService.filterByTime = true;

        var filteredLocations = filterService.filterDataByDateAndTime(locations)
        expect(filteredLocations[0].event).toBeFalsy();
        expect(filteredLocations[3].event).toBeFalsy();
        expect(filteredLocations[4].event).toBeFalsy();
        expect(filteredLocations[1].event).toBeTruthy();
        expect(filteredLocations[2].event).toBeTruthy();
    }));

    it('sets the Event object if matches date and time filter is set to false', inject(function(filterService, filterChangedService){
        filterChangedService.filterDate = getCurrentDate();
        filterChangedService.filterTime = getCurrentTime();
        filterChangedService.filterByTime = false;

        var filteredLocations = filterService.filterDataByDateAndTime(locations)
        expect(filteredLocations[3].event).toBeFalsy();
        expect(filteredLocations[4].event).toBeFalsy();
        expect(filteredLocations[0].event).toBeTruthy();
        expect(filteredLocations[1].event).toBeTruthy();
        expect(filteredLocations[2].event).toBeTruthy();
    }));

    it('returns empty result if all types are not visible, and the params dont matter', inject(function(filterService, filterChangedService){
        filterChangedService.filterBars = false;
        filterChangedService.filterClubs = false;
        filterChangedService.filterRestaurants = false;
        filterChangedService.filterOther = false;
        filterChangedService.filterCity = 'Ulm, Deutschland';
        filterChangedService.centerCoords = {latitude: 48.398332, longitude: 9.992055};
        filterChangedService.filterRadius = 1;
        filterChangedService.locationFilter = "byCity";

        var filterResult = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };

        expect(filterService.applyFilterToAllLocations(mapLocations, filterResult)).toEqual({
            bars: [],
            restaurants: [],
            clubs: [],
            others: []}
        );

        filterChangedService.filterByTime = false;
        filterChangedService.locationFilter = "byLocation";
        filterChangedService.centerCoords = {latitude: 0, longitude: 0};
        filterChangedService.filterRadius = 100;

        expect(filterService.applyFilterToAllLocations(mapLocations, filterResult)).toEqual({
                bars: [],
                restaurants: [],
                clubs: [],
                others: []}
        );
    }));

    it('returns the locations, filtered by city, depending on visibility of types', inject(function(filterService, filterChangedService){
        filterChangedService.filterBars = true;
        filterChangedService.filterClubs = false;
        filterChangedService.filterRestaurants = false;
        filterChangedService.filterOther = true;
        filterChangedService.filterCity = 'Ulm, Deutschland';
        filterChangedService.locationFilter = "byCity";
        var filterResult = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };
        expect(filterService.applyFilterToAllLocations(mapLocations, filterResult)).toEqual({
            bars: [locations[0]],
            restaurants: [],
            clubs: [],
            others: []
        });

        filterChangedService.filterClubs = true;
        filterChangedService.filterRestaurants = true;
        expect(filterService.applyFilterToAllLocations(mapLocations, filterResult)).toEqual({
            bars: [locations[0]],
            restaurants: [],
            clubs: [locations[2]],
            others: []
        });

        filterChangedService.filterCity = 'Laupheim, Deutschland';
        expect(filterService.applyFilterToAllLocations(mapLocations, filterResult)).toEqual({
            bars: [locations[3]],
            restaurants: [],
            clubs: [locations[4]],
            others: []
        });
    }));

    it('returns the input, if filterCity is empty', inject(function(filterService, filterChangedService){
        filterChangedService.filterBars = true;
        filterChangedService.filterClubs = true;
        filterChangedService.filterRestaurants = true;
        filterChangedService.filterOther = true;
        filterChangedService.locationFilter = "byCity";
        var filterResult = {
            bars: [],
            restaurants: [],
            clubs: [],
            others: []
        };

        filterChangedService.filterCity = '';
        expect(filterService.applyFilterToAllLocations(mapLocations, filterResult)).toEqual(mapLocations);
    }))
});