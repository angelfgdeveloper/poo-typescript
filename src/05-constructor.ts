export class MyDate {

  // Forma corta
  constructor(
    public year: number = 1994,
    public month: number = 12,
    private day: number = 10
  ) {}

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type == 'days') {
      this.day += amount;
    }

    if (type == 'months') {
      this.month += amount;
    }

    if (type == 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }

}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) =>', myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) =>', myDate4.printFormat());
