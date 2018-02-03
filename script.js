// find today's date
function makeCalender(){
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();

  var currentDay = date.getDay();
  var currentDate = date.getDate();
  var currentMonth = date.getMonth();
  var currentYear = date.getYear() + 1900; // add 1900 because getYear gives us 118 instead of 2018

  setText("calenderDay", day[currentDay]);
  setText("calenderDate", currentDate);
  setText("calenderMonthYear", month[currentMonth] + " " + currentYear);
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
