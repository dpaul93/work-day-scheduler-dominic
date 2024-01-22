var container = $(".container");
var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var presentHour = moment().hour() - 9;
var date = $("<h1>");
date.text(moment().format("dddd MMMM Do" + ", " + "YYYY"));
container.append(date);

function pageLoad () {
    for (i = 0; i < -9; i++) {
        if (i < presentHour) {
            var timeState = "past";
        }
        else if (i === presentHour) {
            var timeState = "present";
        }
        else if (i > presentHour) {
            var timeState = "future";
        }
    }
}