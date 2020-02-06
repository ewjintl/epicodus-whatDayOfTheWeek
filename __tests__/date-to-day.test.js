import { Date } from './../src/date-to-day.js';

describe('Date', () => {

  test('should test that Date object exists', () => {
    let date = new Date(1,15,1800);
    expect(date.month).toEqual(1);
    expect(date.day).toEqual(15);
    expect(date.year).toEqual(1800);
    expect(date.dateValue).toEqual(0);
  });

  test('should take month and date and assign a numeric value', () => {
    let date = new Date(5, 19, 1800);
    expect(date.findDateValue()).toEqual(139);
  });

  test('Take calculated day number, divide by 7, find remainder and subtract 1 from result.', () => {
    let date = new Date(6, 17, 1800);
    expect(date.findWeekdayGroup()).toEqual(6);
  });

  test('From the result being 0-6, ascribe Mon-Sun respectively.', () => {
    let date = new Date(6, 18, 1800);
    expect(date.findWeekdayName()).toEqual("Wednesday");
  });

  test('should add number of years from anchor year to dateValue', () => {
    let date = new Date(6, 18, 1802);
    expect(date.adjuster()).toEqual(2);
  });
  
  test('should add number of years from anchor year to dateValue', () => {
    let date = new Date(6, 18, 1802);
    expect(date.findWeekdayName()).toEqual("Friday");
  });
    
  test('is any given year a leap year', () => {
    let date = new Date(6, 18, 1804);
    expect(date.leapYearAdjust()).toBe(true);
  });
});