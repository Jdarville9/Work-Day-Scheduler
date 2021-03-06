var todaysDate = moment().format("MMM, DD, YYYY");
var startTime = moment().set("hour", 6).format("h:mm a")
var textArray = []


// add today's date to top of page
setDate = function() {
    $("#currentDay").text(todaysDate);
};


// add color classes according to time of day
pasCurFut = function() {
    var currentTime = moment().hour()
   for (var i = 0; i < 12; i++) {
    var setTime = i + 6;
    if (currentTime > setTime) {
        $("#textarea" + i).addClass("past")
    } else if (currentTime === setTime) {
        $("#textarea" + i).addClass("present")
    } else {
        $("#textarea" + i).addClass("future")
    }
   } 
};


// generate rows
var createRows = function() {
    for(var i = 0; i < 12; i++) {
        var timeSet = moment(startTime, "h a").add(i, "hour").format("h a");
        var row = $("<div>").addClass("timeblock row").attr("id", "timeblock")
        var rowTime = $("<div>").addClass("hour col-1").text(timeSet)
        var textArea = $("<textarea>").addClass("textarea col-10").attr("id", "textarea" +i).text(textArray[i])
        var saveButton = $("<button>").addClass("saveBtn col-1").attr("id", "saveBtn" +i).html("<i class='fas fa-save'></i>")
        var icon = $("<i>").addClass("bi bi-save-fill")

        row.append(rowTime, textArea, saveButton);

        saveButton.append(icon);

        $("#container").append(row);
    };
};

// save textareas to local storage
$("#container").on("click", "button", function() {
    var textContent = [
        $("#textarea0").val(),
        $("#textarea1").val(),
        $("#textarea2").val(),
        $("#textarea3").val(),
        $("#textarea4").val(),
        $("#textarea5").val(),
        $("#textarea6").val(),
        $("#textarea7").val(),
        $("#textarea8").val(),
        $("#textarea9").val(),
        $("#textarea10").val(),
        $("#textarea11").val()
    ]
    localStorage.setItem("tasks", JSON.stringify(textContent))
});

// load textArray from local storage and place value into each textarea
var loadText = function() {
    var text = JSON.parse(localStorage.getItem("tasks"));
    if(text) {
        textArray = text
    }
};

// start the show
var startScheduler = function () {
    loadText();
    setDate();
     createRows();
     pasCurFut();
};

startScheduler();