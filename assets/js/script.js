var todaysDate = moment().format("MMM, DD, YYYY");
var startTime = moment().set("hour", 6).format("h:mm a")
var timeBlock = $("#container")
var saveBtn =

setDate = function() {
    $("#currentDay").text(todaysDate);
}

setDate();


// Get Hours For Time Slots
pasCurFut = function() {
    var currentTime = moment().hour()
   for (var i = 0; i < 12; i++) {
    var setTime
    if (currentTime > setTime) {

        console.log("past")
    } else if (currentTime === setTime) {
        console.log("present")
    } else {
        console.log("poop")
    }
   } 
};

var createRows = function() {

    for(var i = 0; i < 12; i++) {
        var timeSet = moment(startTime, "h a").add(i, "hour").format("h a");
        var row = $("<div>").addClass("timeblock row")
        var rowTime = $("<div>").addClass("hour col-1").text(timeSet)
        var textArea = $("<textarea>").addClass("textarea col-10 past").attr("id", "textarea")
        var saveButton = $("<button>").addClass("saveBtn col-1").attr("id", "saveBtn").html("<i class='fas fa-save'></i>")
        var icon = $("<i>").addClass("bi bi-save-fill")

        row.append(rowTime, textArea, saveButton);

        saveButton.append(icon);

        $("#container").append(row);
}
}
 createRows();

 var makeDots = function() {
     for(var i = 0; i < 19; i ++) {
        var ul = $("<p>").addClass("col-12").text("I ate so many fucking dicks today")
        timeBlock.append(ul)
     }
 }