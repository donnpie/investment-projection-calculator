import React, {useState} from 'react';
import InputBox from "./InputBox";
import Button from "./Button";
import Settings from '../classes/Settings';
import TableRow from '../classes/TableRow';
import Table from '../classes/Table';

const InputGroup = () => {
    const [errorMessages, setErrorMessages] = useState([]); 
    const [yearError, setYearError] = useState(false); 
    const [ageError, setAgeError] = useState(false); 
    const [obError, setObError] = useState(false); 
    const [startConError, setStartConError] = useState(false); 
    const [numOfPError, setNumOfPError] = useState(false); 
    const [contrIncrError, setContrIncrError] = useState(false); 
    const [growthRateError, setGrowthRateError] = useState(false); 

    const onFormSubmit = (event) => {
        event.preventDefault();
        const startYear = event.target.elements.year
        const startAge = event.target.elements.age
        const openingBalance = event.target.elements.openingBalance
        const startcontributions = event.target.elements.contributions
        const numberOfPeriods = event.target.elements.numberOfPeriods
        const contributionIncrease = event.target.elements.contributionIncrease
        const growthRate = event.target.elements.growthRate

        //console.log('startYear', startYear);
        // console.log('startAge', startAge);
        // console.log('openingBalance', openingBalance);
        // console.log('startcontributions', startcontributions);
        // console.log('numberOfPeriods', numberOfPeriods);
        // console.log('contributionIncrease', contributionIncrease);
        // console.log('growthRate', growthRate);

        let _errorMessages = []; //Now using useState for this

        //Validate inputs
        setYearError(!validate(startYear, 'Start year is required', _errorMessages))
        setAgeError(!validate(startAge, 'Start age is required', _errorMessages))
        setObError(!validate(openingBalance, 'Opening balance is required', _errorMessages))
        setStartConError(!validate(startcontributions, 'Start contributions is required', _errorMessages))
        setNumOfPError(!validate(numberOfPeriods, 'Number of periods is required', _errorMessages))
        setContrIncrError(!validate(contributionIncrease, 'Contribution increase is required', _errorMessages))
        setGrowthRateError(!validate(growthRate, 'Growth rate is required', _errorMessages))
        //console.log(_errorMessages);

        setErrorMessages(_errorMessages); //Transfer error messages to state object
        
        //Print error messages to screen if there are any error
        if (_errorMessages.length > 0) {
            //errorElem.innerText = errorMessages.join(', ');
            console.log("there are error messages!");
            return;
        } else {console.log("there are no error messages");}

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
        console.log(table);
    }

    const onCancel = () => {
        alert("onCancel event fired");
    }

    return (
        <>
        {errorMessages && <p className="error-text">{errorMessages}</p>}
        <form onSubmit={onFormSubmit}>        
            <InputBox type="number" class={yearError ? "input error" : "input"} name="year" id="year" placeholder="Start year" min="1900" max="2100" defaultValue="2021"/>
            <InputBox type="number" class={ageError ? "input error" : "input"} name="age" id="age" placeholder="Start age" min="0" max="130" defaultValue="42"/>
            <InputBox type="number" class={obError ? "input error" : "input"} name="opening-balance" id="openingBalance" placeholder="Opening balance" step="0.01" min="0" defaultValue="400000"/>
            <InputBox type="number" class={startConError ? "input error" : "input"} name="contributions" id="contributions" placeholder="Start contribution" step="0.01" min="0" defaultValue="8000"/>
            <InputBox type="number" class={numOfPError ? "input error" : "input"} name="number-of-periods" id="numberOfPeriods" placeholder="Number of periods" min="0" defaultValue="30"/>
            <InputBox type="number" class={contrIncrError ? "input error" : "input"} name="contribution-increase" id="contributionIncrease" placeholder="Contribution increase" step="0.0001" min="0" max="1" defaultValue="0.02"/>
            <InputBox type="number" class={growthRateError ? "input error" : "input"} name="growth-rate" id="growthRate" placeholder="Growth rate" step="0.0001" min="0" max="1" defaultValue="0.08"/>
            <Button type="submit" class="button" caption="Calculate"/>

            <Button type="button" class="button" id="clear-button" caption="Clear table" onClick={onCancel}/>
        </form>
        </>
    )
}

//Helper functions
function validate(field, errorMessage, errorMessages) {
    //returns true if validation is OK
    //console.log('field',field);
    //console.log(field.name);
    if (field.value === '' || field.value === null || field.value === undefined) {
        errorMessages.push(errorMessage);
        //field.classList.add('error');
        return false;
    } else {
        //console.log("validations passed")
        return true;
    }
}

function getNumber(elem, numberType) {
    if (numberType === "Int")
        return parseInt(elem.value);
    if (numberType === "Float")
        return parseFloat(elem.value);
}

export default InputGroup;