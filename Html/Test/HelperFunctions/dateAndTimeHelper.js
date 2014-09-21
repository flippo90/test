function getCurrentTime(){
    var date = new Date();
    var time = "" + date.getHours() + ":" + date.getMinutes();
    if (time == "00:00") //Could not get the time, return a default time.
        return "20:00";
    else
        return time;
}

function getCurrentDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    var todayDate = yyyy + "-" + mm + "-" + dd;

    if (todayDate == "0000-00-00"){
        //Could not get current date
        alert("Es konnte kein aktuelle Datum ermittelt werden. Bitte eins eingeben");
    }

    return todayDate;
}

function getTimeSpanFromNowPlusTwo(){
    var start = parseInt(getCurrentTime().split(':')[0]);
    var end = start + 2;

    return ("" + start + "-" + end);
}