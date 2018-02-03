// global variables

// readable dates
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();

// current
var currentDay = day[date.getDay()];
var currentDate = date.getDate();
var currentMonth = month[date.getMonth()];
var currentYear = date.getYear() + 1900; // add 1900 because getYear gives us 118 instead of 2018

// creates calender
function makeCalendar(){
  setText("calendarDay", currentDay);
  setText("calendarDate", currentDate);
  setText("calendarMonthYear", currentMonth + " " + currentYear);
};


// sets text values of <p> tags
function setText(id, val){
  if(val < 10) {
    val = "0" + val; // leading 0 for dates less than the number 10
  }
  document.getElementById(id).innerHTML = val;
};

// calls makeCalendar function when page loads
window.onload = makeCalendar;

// currently just opens the famousbirthdays webpage of today's date
function celebBirthday(){
  var url = "https://www.famousbirthdays.com/";
  var birthday = currentMonth.toLowerCase() + "" + currentDate;

  window.open(url + birthday + ".html", "_blank");


// //below code SHOULD display name of most famous person whose birthday it is today?
//
//   // gets all famous birthdays page of current date
//   var url = "http://anyorigin.com/go?url=" + encodeURIComponent(realUrl) + birthday + ".html" + "&callback=?";
//
//   $.get(url, function(response) {
//     console.log(response);
//     // gets all names of famous people and chooses first name in array
//     var names = response.getElementsByClassName("name");
//     var firstName = names[0].textContent;
//
//     //displays name
//     setText("celebName", firstName);
//   });
}

// takes user to current date's wikipedia page
function history() {
   var url = "https://en.wikipedia.org/wiki/" + currentMonth + "_" + currentDate;
   window.open(url, "_blank");
}
