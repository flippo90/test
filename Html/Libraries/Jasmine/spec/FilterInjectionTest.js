var events = [
    {id:1, date:"01.01.2014", time:"8-12", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:2, date:"02.01.2014", time:"7-8", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"},
    {id:3, date:"03.01.2014", time:"2-4", locationId:1, name:"bla", description:"blabl", turnus:"1", specials:"bla", likes:10, comments:"hallo"}
];

describe('FilterTest', function(){
    beforeEach(function(){
        module("locationFilters");
    });

    //---------test byDate---------------
    it("has a filter byDate", inject(function ($filter) {
        expect($filter('byDate')).not.toBeNull();
        $filter('byDate');
    }));

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

    //---------test byDate---------------

    it("has a filter byTime", inject(function ($filter) {
        expect($filter('byTime')).not.toBeNull();
    }));

    it("should return null if inout is missing", inject(function($filter){
        expect($filter('byTime')(null, null)).toBeNull();
    }));

    it("should return the right object if input data has the right time", inject(function($filter){
        expect($filter('byTime')(events[2], 1, true)).toBe(events[2]);
        expect($filter('byTime')(events[2], 12, true)).toBe(events[2]);
        expect($filter('byTime')(events[2], 11, true)).toBe(null);
        expect($filter('byTime')(events[2], 2, true)).toBe(null);
        expect($filter('byTime')(events[2], 3, true)).toBe(null);

        expect($filter('byTime')(events[0], 8, false)).toBe(events[0]);
    }));

});
