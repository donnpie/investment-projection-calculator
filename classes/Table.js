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

    rowsToHtml(settings) {
        //Prints rows to an html string
        //It is assumed that the string will be inserted as html inbetween <tbody> tags
        let rows = '';
        const nfObject = new Intl.NumberFormat('en-US');
        for (let row of this.rows) {
            let rowHtml = 
                `<tr>
                    <td>${row.period}</td>
                    <td>${row.age}</td>
                    <td>${nfObject.format(Math.round(row.openingBalance))}</td>
                    <td>${nfObject.format(Math.round(row.contributions))}</td>
                    <td>${nfObject.format(Math.round(row.getInterestOnContributions(settings.growthRate)))}</td>
                    <td>${nfObject.format(Math.round(row.getInterestOnOpeningBalance(settings.growthRate)))}</td>
                    <td>${nfObject.format(Math.round(row.getClosingBalance(settings.growthRate)))}</td>
                </tr>`;
            rows += rowHtml;
        }
        return rows;
    }
}