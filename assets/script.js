$(document).ready(function() {

    dayjs.extend(window.dayjs_plugin_advancedFormat)

    var currentHour = dayjs ();
    var currentDay = dayjs();
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
    // var hourDisplay = $("<p>");
hourDisplay.addClass("currentHour")
$("header").append(hourDisplay);

// Creating date format
// var hourDisplay = $("<p>");
$("#currentDay").text(currentDay.format("[Today is:] dddd[,] MMMM Do"));
$(".currentHour").text(currentHour.format("[Present Hour:] HH[:00]"));


})