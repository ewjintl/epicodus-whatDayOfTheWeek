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

});

