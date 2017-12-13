const openingMoment = moment([2019, 3, 1]);
const rotation = ["|", "/", "-", "\\"];
let rotationIndex = 0;

function updateCountdown(countdown) {
    document.getElementById("countdown").innerHTML = countdown + "<br>(" + rotation[rotationIndex] + ")";
    rotationIndex = (rotationIndex + 1) % rotation.length;
}

function showAllFields(duration) {
    updateCountdown(duration.years() + " Jahr, " + duration.months() +
        " Monaten, " + duration.days() + " Tagen, " + duration.hours() +
        " Stunden, " + duration.minutes() + " Minuten und " + duration.seconds() + " Sekunden");
}

function showMillis(duration) {
    updateCountdown(duration.as("milliseconds") + " Millisekunden");
}

function showDays(duration) {
    updateCountdown((Math.round(duration.as("days") * 100) / 100) + " Tagen");
}

function showHours(duration) {
    updateCountdown((Math.round(duration.as("hours") * 100) / 100) + " Stunden");
}


const countdowns = [showAllFields, showMillis, showDays, showHours];
let currentCountdown = 0;

window.onload = function () {


    window.setInterval(function () {
        const diff = openingMoment.diff(moment());
        const duration = moment.duration(diff);
        countdowns[currentCountdown](duration);
    }, 85);

    window.setInterval(function () {
        currentCountdown = (currentCountdown + 1) % countdowns.length
    }, 5000);
};
