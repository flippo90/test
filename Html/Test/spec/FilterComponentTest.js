var events = [
    {id:1, date:"01.01.2014", time:"8-12", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:2, date:"02.01.2014", time:"7-8", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:3, date:"03.01.2014", time:"2-4", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:4, date:"01.01.2014", time:"4-6", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
];

var locations = [
    {locationId: 1, address:"Gasse 2, Ulm, Deutschland", coords: {latitude: 48.396754, longitude: 9.989834}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
    {locationId: 2, address:"Gasse 2, Neu-Ulm, Deutschland", coords: {latitude: 48.39857, longitude: 10.006020}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
    {locationId: 3, address:"Gasse 2, Ulm, Deutschland", coords: {latitude: 48.400884, longitude: 9.991201}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
    {locationId: 4, address:"Gasse 2, Laupheim, Deutschland", coords: {latitude: 48.2181674, longitude: 9.87372}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
    {locationId: 5, address:"Neue Ulmer Strasse 10, Laupheim, Deutschland", coords: {latitude: 48.247387, longitude: 10.358719}, event: false, eventObject: null, locEvents: [], options: {visible: false}, name: "", type: 1, comments: [], imagePath: ""},
];

describe('Filter by Distance', function(){
    beforeEach(function(){
        module("locationFilters");
    });

    var emptyList = [];

    it('returns empty list if input list is empty', inject(function($filter){
        expect($filter('byDistance')(emptyList, {latitude: 20, longitude: 10}, 100)).toEqual(emptyList);
    }));

    it('returns empty list if no location in radius found', inject(function($filter){
        expect($filter('byDistance')(locations, {latitude: 48.398718, longitude: 9.991638}, 0)).toEqual(emptyList);
        expect($filter('byDistance')(locations, {latitude: 20, longitude: 10}, 100)).toEqual(emptyList);
    }));

    it('returns three locations that are in the radius', inject(function($filter){
        expect($filter('byDistance')(locations, {latitude: 48.398718, longitude: 9.991638}, 10).length).toBe(3);
        expect($filter('byDistance')(locations, {latitude: 48.398718, longitude: 9.991638}, 100).length).toBe(5);
        expect($filter('byDistance')(locations, {latitude: 48.225892, longitude: 9.873948}, 10).length).toBe(1);
    }));
});

describe('check if filter modules exist', function(){

    beforeEach(function(){
        module("locationFilters");
    });

    it("has a filter byDate", inject(function ($filter) {
        expect($filter('byDate')).not.toBeNull();
    }));

    it("has a filter byCity", inject(function ($filter) {
        expect($filter('byCity')).not.toBeNull();
    }));

    it("has a filter byTime", inject(function ($filter) {
        expect($filter('byTime')).not.toBeNull();
    }));

    it("has a filter getIconFromFilterResultBar", inject(function ($filter) {
        expect($filter('getIconFromFilterResultBar')).not.toBeNull();
    }));
    it("has a filter getIconFromFilterResultClub", inject(function ($filter) {
        expect($filter('getIconFromFilterResultClub')).not.toBeNull();
    }));
    it("has a filter getIconFromFilterResultRestaurant", inject(function ($filter) {
        expect($filter('getIconFromFilterResultRestaurant')).not.toBeNull();
    }));
    it("has a filter getIconFromFilterResultOther", inject(function ($filter) {
        expect($filter('getIconFromFilterResultOther')).not.toBeNull();
    }));
});


describe('Filter Locations by city', function(){
    beforeEach(function(){
        module("locationFilters");
    });

    var emptyList = [];

    it("should return empty list if the input is wrong", inject(function($filter){
        expect($filter('byCity')(null, "Ulm")).toEqual(emptyList);
    }));

    it("should return an empty list if no location with city is found", inject(function($filter){
        expect($filter('byCity')(locations, "notExistingCity")).toEqual(emptyList);
    }));

    it("should return list with two elemnts if city is Ulm", inject(function($filter){
        expect($filter('byCity')(locations, "Ulm").length).toBe(2);
    }));

    it("should return list with one element if input is Neu-Ulm", inject(function($filter){
        expect($filter('byCity')(locations, "Neu-Ulm").length).toBe(1);
    }));
});

describe('Filter by Date Test', function(){
    beforeEach(function(){
        module("locationFilters");
    });

    it("should return null if input is missing", inject(function($filter){
        expect($filter('byDate')(null, null)).toBeNull();
    }));

    it("should return the right object if one of the input objects has the given date", inject(function($filter){
        expect($filter('byDate')(events, "01.01.2014")).toBe(events[0]);
        expect($filter('byDate')(events, "02.01.2014")).toBe(events[1]);
        expect($filter('byDate')(events, "03.01.2014")).toBe(events[2]);
    }));

    it("should return null if the date is not found in the input events", inject(function($filter){
        expect($filter('byDate')(events, "Date not in list")).toBe(null);
    }));
});

describe('Filter By Time Test', function(){
    beforeEach(function(){
        module("locationFilters");
    });
    it("should return null if input is missing", inject(function($filter){
        expect($filter('byTime')(null, null)).toBeNull();
    }));

    it("should return the right object if input data has the right time", inject(function($filter){
        expect($filter('byTime')(events[2], "1:00", true)).toBe(events[2]);
        expect($filter('byTime')(events[2], "2:00", true)).toBe(events[2]);
        expect($filter('byTime')(events[2], "3:00", true)).toBe(events[2]);
        expect($filter('byTime')(events[2], "3:59", true)).toBe(events[2]);
    }));

    it("this is an test that fails because implementation is wrong", inject(function($filter){
        expect($filter('byTime')(events[2], "12:00", true)).toBe(events[2]);
    }));

    it("should return null if there is no event at time", inject(function($filter){
        expect($filter('byTime')(events[2], "11:00", true)).toBe(null);
        expect($filter('byTime')(events[2], "04:01", true)).toBe(null);
        expect($filter('byTime')(events[2], "05:00", true)).toBe(null);
    }));

    it("should return the input if the time filter is not activated, doesnt matter what time is given", inject(function($filter){
        expect($filter('byTime')(events[0], "xx:xx", false)).toBe(events[0]);
    }));
});

describe('Filter Images Test', function() {
    beforeEach(function(){
        module("locationFilters");
    });

    it("should return the image for events if the input is not null", inject(function($filter){
        expect($filter('getIconFromFilterResultBar')(events[0])).toBe('http://localhost/llbec/Html/Common/Images/green-dot.png');
        expect($filter('getIconFromFilterResultClub')(events[0])).toBe('http://localhost/llbec/Html/Common/Images/blue-dot.png');
        expect($filter('getIconFromFilterResultRestaurant')(events[0])).toBe('http://localhost/llbec/Html/Common/Images/yellow-dot.png');
        expect($filter('getIconFromFilterResultOther')(events[0])).toBe('http://localhost/llbec/Html/Common/Images/orange-dot.png');
    }));

    it("should return the image for locations if the input is null", inject(function($filter){
        expect($filter('getIconFromFilterResultBar')(null)).toBe('http://localhost/llbec/Html/Common/Images/Circle_Green.png');
        expect($filter('getIconFromFilterResultClub')(null)).toBe('http://localhost/llbec/Html/Common/Images/Circle_Blue.png');
        expect($filter('getIconFromFilterResultRestaurant')(null)).toBe('http://localhost/llbec/Html/Common/Images/Circle_Yellow.png');
        expect($filter('getIconFromFilterResultOther')(null)).toBe('http://localhost/llbec/Html/Common/Images/Circle_Orange.png');
    }));
});

