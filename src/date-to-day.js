
export class Date {
  constructor(month, day, year, dateValue) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.dateValue = 0;
  }
};

Date.prototype.findDateValue = function () {
  let dateValue = this.adjuster();
  if (this.month == 1) {
    dateValue += 0;
  } else if (this.month == 2) {
    dateValue += 31;
  } else if (this.month == 3) {
    dateValue += 59;
  } else if (this.month == 4) {
    dateValue += 90;
  } else if (this.month == 5) {
    dateValue += 120;
  } else if (this.month == 6) {
    dateValue += 151;
  } else if (this.month == 7) {
    dateValue += 181;
  } else if (this.month == 8) {
    dateValue += 212;
  } else if (this.month == 9) {
    dateValue += 243;
  } else if (this.month == 10) {
    dateValue += 278;
  } else if (this.month == 11) {
    dateValue += 304;
  } else if (this.month == 12) {
    dateValue += 334;
  }
  dateValue = (this.day + dateValue);
  return dateValue;
}


Date.prototype.findWeekdayGroup = function () {
  let findWeekdayGroup = ((this.findDateValue()%7)-1);
    if (findWeekdayGroup == (-1)) {
      findWeekdayGroup = 6;
    } 
  return findWeekdayGroup;
}

Date.prototype.findWeekdayName = function () {
  let findWeekdayGroup = (this.findWeekdayGroup());
  let findWeekdayName = "";
    if (findWeekdayGroup == 0) {
      findWeekdayName = "Wednesday";
    } else if (findWeekdayGroup == 1) {
      findWeekdayName = "Thursday";
    } else if (findWeekdayGroup == 2) {
      findWeekdayName = "Friday";
    } else if (findWeekdayGroup == 3) {
      findWeekdayName = "Saturday";
    } else if (findWeekdayGroup == 4) {
      findWeekdayName = "Sunday";
    } else if (findWeekdayGroup == 5) {
      findWeekdayName = "Monday";
    } else if (findWeekdayGroup == 6) {
      findWeekdayName = "Tuesday";
    }
      return findWeekdayName;    
}


Date.prototype.adjuster = function () {
  let dateValue = (this.dateValue + (this.year - 1800));

  // if (date.leapYearAdjust() == true ) {
  //   this.dateValue += 2;
  // } else if (date.leapYearAdjust() == false ) {
  //   this.dateValue += 1;
  // }
  return dateValue;
}

// Date.prototype.leapYearAdjust = function () {
//   if (this.year % 400 === 0) {
//     return true;
//   } else if (this.year % 100 === 0){
//     return false;
//   } else if (this.year % 4 === 0){
//     return true
//   } 
//   return false;
// }


// The day for any date advances one day per year, two days in leap years. Leap years repeat every 28 years. Looping?