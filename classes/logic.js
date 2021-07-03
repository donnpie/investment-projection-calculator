

const startYear = document.getElementById('year');
const startAge = document.getElementById('age');
const openingBalance = document.getElementById('opening-balance');
const startcontributions = document.getElementById('contributions');
const numberOfPeriods = document.getElementById('number-of-periods');
const contributionIncrease = document.getElementById('contribution-increase');
const growthRate = document.getElementById('growth-rate');

const errorElem = document.getElementById('error')

const form = document.getElementById('input-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessages = [];
    //Toggle input box colors when there is an error
    validate(startYear, 'Start year is required', errorMessages)
    validate(startAge, 'Start age is required', errorMessages)
    validate(openingBalance, 'Opening balance is required', errorMessages)
    validate(startcontributions, 'Start contributions is required', errorMessages)
    validate(numberOfPeriods, 'Number of periods is required', errorMessages)
    validate(contributionIncrease, 'Contribution increase is required', errorMessages)
    validate(growthRate, 'Growth rate is required', errorMessages)
    //console.log(typeof(startYear.value));
    
    
    //Print error messages to screen
    if (errorMessages.length > 0) {
        //alert(errorMessages); 
        errorElem.innerText = errorMessages.join(', ');
        return;
    }
    //console.log (errorMessages.length);
    //console.log(typeof(parseInt(startYear.value)));
    console.log(typeof(parseInt(numberOfPeriods.value)));

    //Define the settings
    let settings = new Settings(
        getNumber(numberOfPeriods, 'Int'), 
        getNumber(contributionIncrease, 'Float'),
        getNumber(growthRate, 'Float'),
    );
    //console.log(settings);
    

    //Define row for starting period
    let startRow = new TableRow(
        0, 
        getNumber(startYear, 'Int'), 
        getNumber(startAge, 'Int'), 
        getNumber(openingBalance, 'Int'), 
        getNumber(startcontributions, 'Int'), 
    );
    //console.log(startRow);

    //Add the rest of the rows
    let rows = [];
    rows.push(startRow);
    for (let i = 1; i <= settings.numOfPeriods; i++) {
        const period = rows[i-1].period + 1;
        const year = rows[i-1].year + 1;
        const age = rows[i-1].age + 1;
        const ob = rows[i-1].getClosingBalance(settings.growthRate);
        const contributions = rows[i-1].contributions * (1+ settings.contributionIncreaseRate);
        let newRow = new TableRow(period, year, age, ob, contributions);
        rows.push(newRow);
    }
    let table = new Table(rows);

    //table.printRows();

    //Create dynamic HTML table
    tableBody = document.getElementById('table-body');
    let rowsHtml = table.rowsToHtml(settings);
    //console.log(rowsHtml);
    tableBody.innerHTML = rowsHtml;



});

function validate(field, errorMessage, errorMessages) {
    if (field.value === '' || field.value === null) {
        errorMessages.push(errorMessage);
    }
}

function getNumber(elem, numberType) {
    if (numberType === "Int")
        return parseInt(elem.value);
        if (numberType === "Float")
        return parseFloat(elem.value);
}


//References
//https://www.youtube.com/watch?v=In0nB0ABaUk
//https://stackoverflow.com/questions/34057595/allow-2-decimal-places-in-input-type-number/34057860
//https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
//https://www.w3schools.com/tags/att_input_value.asp
//https://youtu.be/ri5Nqe_IK50
//https://www.w3schools.com/jsref/prop_html_innerhtml.asp
//https://stackoverflow.com/questions/12114570/how-to-align-texts-inside-of-an-input
//https://pawelgrzybek.com/rounding-and-truncating-numbers-in-javascript/
