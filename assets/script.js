$(document).ready(function() {

    dayjs.extend(window.dayjs_plugin_advancedFormat)

    var presentHour = dayjs ();
    var presentDay = dayjs();
    var hourDisplay = $("<p>");
    var workingHour = [
        {hourIndex: 1,
        hour: "9am"},
        {hourIndex: 2,
        hour: "10am"},
        {hourIndex: 3,
        hour: "11am"},
        {hourIndex: 4,
        hour: "12pm"},
        {hourIndex: 5,
        hour: "1pm"},
        {hourIndex: 6,
        hour: "2pm"},
        {hourIndex: 7,
        hour: "3pm"},
        {hourIndex: 8,
        hour: "4pm"},
        {hourIndex: 9,
        hour: "5pm"},
    ];
hourDisplay.addClass("presentHour")
$("header").append(hourDisplay);

// Creating date format


})