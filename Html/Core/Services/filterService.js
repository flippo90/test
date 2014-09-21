app.service('filterService', function ($filter, filterChangedService, databaseLocationService) {
    this.mapLocations = {
        bars: [],
        restaurants: [],
        clubs: [],
        others: []
    };

    this.byDistance = function(filterList, centerCoords, radius){
        return $filter('byDistance')(filterList, centerCoords, radius);
    };

    this.byCity = function(filterList, city){
        return $filter('byCity')(filterList, city);
    };

    this.filterDataByDateAndTime = function(list){
        for(var i in list)
        {
            var filterResult = $filter('byDate')(list[i].locEvents, filterChangedService.filterDate);
            var nextFilterResult = $filter('byTime')(filterResult, filterChangedService.filterTime, filterChangedService.filterByTime);
            list[i].eventObject = nextFilterResult;
            if (nextFilterResult != null){
                list[i].event = true;
            }
            else{
                list[i].event = false;
            }
        }
        return list;
    };

    this.applyFilterToAllLocations = function(locations, result){
        result.bars.length = 0;
        result.restaurants.length = 0;
        result.others.length = 0;
        result.clubs.length = 0;

        result.bars = this.applyAllFiltersTo(locations.bars, filterChangedService.filterBars);

        result.restaurants = this.applyAllFiltersTo(locations.restaurants, filterChangedService.filterRestaurants);
        result.clubs = this.applyAllFiltersTo(locations.clubs, filterChangedService.filterClubs);
        result.others = this.applyAllFiltersTo(locations.others, filterChangedService.filterOther);
        return result;
    };

    this.applyAllFiltersTo = function(list, visible){
        var resultList = this.resetVisibleAttribute(list, visible);
        if (resultList.length == 0){
            return resultList;
        }

        if(filterChangedService.locationFilter == "byCity"){
            resultList = this.byCity(list, filterChangedService.filterCity);
        } else{
            resultList = this.byDistance(list, filterChangedService.centerCoords, filterChangedService.filterRadius);
        }

        return resultList;
    };

    this.resetVisibleAttribute = function(list, visible){
        var result = [];
        if (visible){
            for (var i in list){
                list[i].options.visible = true;
                result.push(list[i]);
            }
        }
        else{
            result.length = 0;
        }
        return result;
    };

    this.removeMapLocations = function(){
        this.mapLocations.bars.length = 0;
        this.mapLocations.restaurants.length = 0;
        this.mapLocations.clubs.length = 0;
        this.mapLocations.others.length = 0;
    }

});


