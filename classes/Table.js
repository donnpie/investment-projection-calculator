//The Table class represesnts a table consisting of a number of rows

class Table {
    constructor(rows) {
        //rows must be an array of TableRow objects
        this.rows = rows;
    }

    addRow(row) {
        this.rows.push(row);
    }

    printRows() {
        for (let row of this.rows) {
            console.log(row);
        }
    }
}