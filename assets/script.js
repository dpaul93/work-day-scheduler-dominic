$(document).ready(function() {

    dayjs.extend(window.dayjs_plugin_advancedFormat)

    var currentHour = dayjs ();
    var currentDay = dayjs();
    var hourDisplay = $("<p>");
    var workingHours = [
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

function timeBlocks (hours) {
    var list = JSON.parse(localStorage.getItem("tasks"));

    if (!list) {
        list = [];
        for (let i = 1; i <= 9; i++) {
            list.push({tskTime: i, tskText: ""})
        };
        localStorage.setItem("tasks", JSON.stringify(list));
    };

    for (let i = 0; i < hours.length; i++) {
        var blockRow = $("<div>");
        blockRow.addClass("row");

        var hourBlock = $("<div>");
        hourBlock.addClass("hour col-1");
        hourBlock.text(hours[i].hour);
        blockRow.append(hourBlock);

        var tasks = $("<textarea>");
        tasks.addClass("description col");
        tasks.attr("data-index", hours[i].hourIndex);
        tasks.text(list[i].tskText);
        blockRow.append(tasks);

        var save = $("<button><i>");
        save.addClass("saveBtn col-1 fas fa-save fa-2x");
        save.css("color:#ffffff");
        blockRow.append(save);

        $(".container").append(blockRow);
    };
}

timeBlocks (workingHours);

function hourPsnt () {
    var currentHourNm = currentHour.format("HH");
    var currentHourIndex = parseInt(currentHourNm);

    for (let i = 0; i < workingHours.length; i++) {
        if (workingHours[i].hourIndex === currentHourIndex) {
            var userTasks = $(["data-index='"] + workingHours[i].hourIndex + "']");
            userTasks.addClass("present");
        };
    };
}

