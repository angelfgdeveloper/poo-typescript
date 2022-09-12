export class MyDate {

  // Forma corta
  constructor(
    private _year: number = 1994,
    public month: number = 12,
    private _day: number = 10
  ) {}

  printFormat(): string {
    return `${this._day}/${this.month}/${this._year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type == 'days') {
      this._day += amount;
    }

    if (type == 'months') {
      this.month += amount;
    }

    if (type == 'years') {
      this._year += amount;
    }
  }

  // getDay() {
  //   return this.day;
  // }

  get day() {
    return this._day;
  }

  // Año bisiesto
  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true
    if (this._year % 100 === 0) return false

    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('1993', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate4.isLeapYear);
