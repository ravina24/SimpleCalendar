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
function makeCalender(){
  setText("calenderDay", currentDay);
  setText("calenderDate", currentDate);
  setText("calenderMonthYear", currentMonth + " " + currentYear);
};


// sets text values of <p> tags
function setText(id, val){
  if(val < 10) {
    val = "0" + val; // leading 0 for dates less than the number 10
  }
  document.getElementById(id).innerHTML = val;
};

// calls makeCalender function when page loads
window.onload = makeCalender;

// currently just opens the famousbirthdays webpage of today's date
function celebBirthday(){
  var url = "https://www.famousbirthdays.com/";
  var birthday = currentMonth.toLowerCase() + "" + currentDate;

  window.open(url + birthday + ".html", "_blank");


// below code SHOULD display name of most famous person whose birthday it is today?
  // // gets famous birthdays page of current date
  // $.get(url + birthday + ".html", function(response) {
  //   console.log(response);
  // });
  //
  // var name = $(response).find("name");
  //
  // setText("celebName", name);
}

// takes user to current date's wikipedia page
function history() {
  var url = "https://en.wikipedia.org/wiki/" + currentMonth + "_" + currentDate;
  window.open(url, "_blank");

}
