let settings = new Settings(30, 0.02, 0.08);
//console.log(settings.numOfPeriods);
let tableRow1 = new TableRow(0, 2021, 42, 400000, 8000);
//tableRow1.printRow();
//let tableRow2 = new TableRow(1, 2022, 43, 440320, 8160);
let rows = [];
rows.push(tableRow1);
for (let i = 1; i <= settings.numOfPeriods; i++) {
    const period = rows[i-1].period + 1;
    const year = rows[i-1].year + 1;
    const age = rows[i-1].age + 1;
    const ob = rows[i-1].getClosingBalance(settings.growthRate);
    const contributions = rows[i-1].contributions * (1+ settings.contributionIncreaseRate);
    let newRow = new TableRow(period, year, age, ob, contributions);
    rows.push(newRow);
    //table.addRow(newRow);
}
table = new Table(rows);

table.printRows();
