var openingYear = 2019;
var openingMonth = 3;
var openingDay = 1;

var openingDate = new Date(openingYear, (openingMonth - 1), openingDay);

var countdownType;

window.onload = function(){
    updateTimePeriods();
    countdownType = -1;
    changeCountdown();

    window.setInterval(function(){
        updateTimePeriods();
    }, 1);

    window.setInterval(function(){
        changeCountdown();
    }, 2000);
}

function updateTimePeriods()
{
    var now = new Date();

    var pendingTime = openingDate - now;
    //console.log(pendingTime);

    var millisecondsShortenLength     =   1;
    var secondLength                =   1000;
    var minuteLength                =   secondLength  * 60;
    var hourLength                  =   minuteLength  * 60;
    var dayLength                   =   hourLength    * 24;

    var pendingDays = Math.floor(pendingTime / dayLength);
    //console.log(pendingDays);

    var pendingHours = Math.floor(pendingTime / hourLength);
    //Console.log(pendingHours);

    var pendingMinutes = Math.floor(pendingTime / minuteLength);
    //console.log(pendingMinutes);

    var pendingSeconds = Math.floor(pendingTime / secondLength);
    //console.log(pendingSeconds);

    var pendingMillisecondsShorten = Math.floor(pendingTime / millisecondsShortenLength);
    //console.log(pendingMillisecondsShorten);

    updateHTML(pendingDays, pendingHours, pendingMinutes, pendingSeconds, pendingMillisecondsShorten);
}

function updateHTML(pendingDays, pendingHours, pendingMinutes, pendingSeconds, pendingMillisecondsShorten){
    document.getElementById("displayDays").innerHTML = pendingDays + " " + ((pendingDays > 1)? "Tagen" : "Tag");

    document.getElementById("displayHours").innerHTML = pendingHours + " " + ((pendingHours > 1)? "Stunden" : "Stunde");

    document.getElementById("displayMinutes").innerHTML = pendingMinutes + " " + ((pendingMinutes > 1)? "Minuten" : "Minute");

    document.getElementById("displaySeconds").innerHTML = pendingSeconds + " " + ((pendingSeconds > 1)? "Sekunden" : "Sekunde");

    document.getElementById("displayMillisecondsShorten").innerHTML = pendingMillisecondsShorten + " " + ((pendingMillisecondsShorten > 1)? "Millisekunden" : "Millisekunde");
}

function changeCountdown(){
    countdownType++;
    if(countdownType > 4){
        countdownType = 0;
    }
    var allCountdowns = document.querySelectorAll(".timer");
    for(var i = 0; i < allCountdowns.length; i++){
        allCountdowns[i].style.display = 'none';
    }
    allCountdowns[countdownType].style.display = 'inline';
}