var allLocations = new Array();

function createTestEvents(){
$.ajax({
        type: "GET",
        url: "Core/Php/getAllLocations.php",
        dataType: "json",

        success: function(result){
        	for (var loc in result.geoLocations){
        		var geoLocString = getPointFromString(result.geoLocations[loc].slice(1));
        		var location = new locationConstructor(result.id[loc], result.names[loc], 
        				geoLocString, result.openingHours[loc], result.types[loc], result.likes[loc])
        		allLocations.push(location)
        		createEventForLocation(location);
            }
        }
    })
}

function getPointFromString(str){
    var bits = str.split(/,\s*/);
    var point = new google.maps.LatLng(parseFloat(bits[0]),parseFloat(bits[1]));
    return point;
}

function createEventForLocation(location){
	var name = location.name;
	var descirption = location.name;
	var specials = location.name;
	
	var today = new Date();
	var dd = today.getDate().toString();
	var mm = today.getMonth()+1; //January is 0!
	var mms = mm.toString();
	var yyyy = today.getFullYear();

    var max1 = 1;
    var min1 = 0;
    var randomDateToday = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

    if (randomDateToday == 1)
        var date = yyyy + "-" + mms + "-" + dd;
	else
        var date = yyyy-1 + "-" + mms + "-" + dd;

    var min = 1;
	var max = 24
	
	var randomTimeStart = Math.floor(Math.random() * (max - min + 1)) + min;
	var randomTimeEnd = Math.floor(Math.random() * (max - min + 1)) + min;

    var hours = randomTimeStart + "-" + randomTimeEnd;
	var turnus = 0
	var location = location.id
	console.log("locationName " + name + " descirption " + descirption + " specials " + specials + " date " + date + " hours " + hours + " turnus " + turnus + " location " + location);
	$.ajax({
         type: "POST",
         url: "Core/Php/createEvent.php",
         data: "name=" + name + "&descirption=" + descirption + "&specials=" + specials + "&date=" + date+ "&hours=" + hours + "&turnus=" + turnus + "&location=" + location,
         success: function(msg)
         {
             console.log("successfully added");
         }
    });
}

function locationConstructor(id, name, geoLocation, openingHours, type, likes, address){
    this.id = id;
    this.name = name;
    this.geoLocation = geoLocation;
    this.openingHours = openingHours;
    this.type = type;
    this.likes = likes;
    this.marker = null;
    this.events = new Array();
    this.eventMatchedFilter = null;
    this.address = address;
}

