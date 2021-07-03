//Row is a abstract class that represents a generic row in a table

class Row {
    constructor(period, year, age, ob, contributions) {
        this.period = period;
        this.year = year;
        this.age = age;
        this.openingBalance = ob;
        this.contributions = contributions;
    }

    getInterestOnContributions(interestRate) {
        return 0.5*this.contributions*interestRate;
    }

    getInterestOnOpeningBalance(interestRate) {
        return this.openingBalance*interestRate;
    }

    getClosingBalance(interestRate) {
        const interestOnContributions = this.getInterestOnContributions(interestRate);
        const interestOnOpeningBalance = this.getInterestOnOpeningBalance(interestRate);
        const interest = interestOnContributions + interestOnOpeningBalance;
        return this.openingBalance +this.contributions + interest;
    }

    printRow() {
        console.log(this);
    }
}