$(document).ready(function () {
  dayjs.extend(window.dayjs_plugin_advancedFormat);

  var currentHour = dayjs();
  var currentDay = dayjs();
  var hourDisplay = $("<p>");
  var workingHours = [
    { hourIndex: 0, hour: "9am" },
    { hourIndex: 1, hour: "10am" },
    { hourIndex: 2, hour: "11am" },
    { hourIndex: 3, hour: "12pm" },
    { hourIndex: 4, hour: "1pm" },
    { hourIndex: 5, hour: "2pm" },
    { hourIndex: 6, hour: "3pm" },
    { hourIndex: 7, hour: "4pm" },
    { hourIndex: 8, hour: "5pm" },
  ];

  hourDisplay.addClass("currentHour");
  $("header").append(hourDisplay);

  $("#currentDay").text(currentDay.format("[Today is:] dddd[,] MMMM Do"));
  $(".currentHour").text(currentHour.format("[Present Hour:] HH[:00]"));

  function timeBlocks(hours) {
    var list = JSON.parse(localStorage.getItem("tasks"));

    if (!list) {
      list = [];
      for (let i = 0; i <= 8; i++) {
        list.push({ tskTime: i, tskText: "" });
      }
      localStorage.setItem("tasks", JSON.stringify(list));
    }

    var maxLength = Math.max(hours.length, list.length);

    for (let i = 0; i < maxLength; i++) {
      var blockRow = $("<div>");
      blockRow.addClass("row");

      var hourBlock = $("<div>");
      hourBlock.addClass("hour col-1");
      hourBlock.text(hours[i]?.hour || "");
      blockRow.append(hourBlock);

      var tasks = $("<textarea>");
      tasks.addClass("description col");
      tasks.attr("data-index", i);
      tasks.text(list[i]?.tskText || "");
      blockRow.append(tasks);

      var save = $("<button><i>");
      save.addClass("saveBtn col-1 fas fa-save fa-2x");
      save.css("color:#ffffff");
      blockRow.append(save);

      $(".container").append(blockRow);
    }
  }

  timeBlocks(workingHours);

  function hourPsnt() {
    var currentHourNm = currentHour.format("HH");
    var currentHourIndex = parseInt(currentHourNm);

    for (let i = 0; i < workingHours.length; i++) {
      if (workingHours[i].hourIndex === currentHourIndex) {
        var userTasks = $("[data-index='" + workingHours[i].hourIndex + "']");
        userTasks.addClass("present");
      }
    }
  }

  hourPsnt();

  function hourPst() {
    var currentHourNm = currentHour.format("HH");
    var currentHourIndex = parseInt(currentHourNm);

    for (let i = 0; i < workingHours.length; i++) {
      if (workingHours[i].hourIndex < currentHourIndex) {
        var userTasks = $("[data-index='" + workingHours[i].hourIndex + "']");
        userTasks.addClass("past");
      }
    }
  }

  hourPst();

  function hourFtr() {
    var currentHourNm = currentHour.format("HH");
    var currentHourIndex = parseInt(currentHourNm);

    for (let i = 0; i < workingHours.length; i++) {
      if (workingHours[i].hourIndex > currentHourIndex) {
        var userTasks = $("[data-index='" + workingHours[i].hourIndex + "']");
        userTasks.addClass("future");
      }
    }
  }

  hourFtr();

  function saveEntry() {
    var clickedBtn = $(this);
    var textArea = clickedBtn.closest(".row").find("textarea");
    var currentUserTask = JSON.parse(localStorage.getItem("tasks"));
    var hourNumIndex = textArea.data("index");

    if (textArea.val().trim() !== "") {
      var tskText = textArea.val();
      var tskTime = hourNumIndex;
      var listedItems = { tskTime, tskText };
    } else {
      alert(
        "Calendar Empty... Either you're on holiday or slacking off. Lets get some tasks in!"
      );
      return;
    }

    if (!currentUserTask) {
      currentUserTask = [];
    }

    for (let i = 0; i < currentUserTask.length; i++) {
      if (currentUserTask[i].tskTime === hourNumIndex) {
        currentUserTask.splice(i, 1);
      }
    }

    var tasksNew = [...currentUserTask, listedItems];
    tasksNew.sort((a, b) => a.tskTime - b.tskTime);
    localStorage.setItem("tasks", JSON.stringify(tasksNew));
  }
  $(".saveBtn").click(saveEntry);
});
