app.service('filterChangedService', function () {
    this.filterBars = true;
    this.filterRestaurants = true;
    this.filterClubs = true;
    this.filterOther = true;

    this.filterRadius = 1;
    this.maximumFilterRadius = 10;
    this.centerCoords = {
        latitude: 0,
        longitude: 0
    };
    this.locationFilter = "byCurrentLocation";

    this.filterCity = "";


});