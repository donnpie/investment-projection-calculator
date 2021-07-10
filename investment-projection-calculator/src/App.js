import React, {useState} from 'react';
import InputGroup from './components/InputGroup';
import TableDisplay from './components/TableDisplay';
import Settings from './classes/Settings';
import TableRow from './classes/TableRow';
//import Table from './classes/Table';
import './App.css';

function App() {
  const [errorMessages, setErrorMessages] = useState([]); 
  const [yearError, setYearError] = useState(false); 
  const [ageError, setAgeError] = useState(false); 
  const [obError, setObError] = useState(false); 
  const [startConError, setStartConError] = useState(false); 
  const [numOfPError, setNumOfPError] = useState(false); 
  const [contrIncrError, setContrIncrError] = useState(false); 
  const [growthRateError, setGrowthRateError] = useState(false); 
  const [rows, setRows] = useState([]);
  const [settings, setSettings] = useState();

 

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
    let _settings = new Settings(
        getNumber(numberOfPeriods, 'Int'), 
        getNumber(contributionIncrease, 'Float'),
        getNumber(growthRate, 'Float'),
    );
    setSettings(_settings);
    //console.log(settings);

    //Define row for starting period
    let _startRow = new TableRow(
        0, 
        getNumber(startYear, 'Int'), 
        getNumber(startAge, 'Int'), 
        getNumber(openingBalance, 'Int'), 
        getNumber(startcontributions, 'Int'), 
    );
    //console.log(startRow);

    //Add the rest of the rows
    let _rows = [];
    _rows.push(_startRow);
    //console.log('startRow', startRow);
      //setRows([startRow]);
      //setRows(prevRows => {return [...prevRows, startRow]});
      for (let i = 1; i <= _settings.numOfPeriods; i++) {
        //console.log('i', i);
        const period = _rows[i-1].period + 1;
        const year = _rows[i-1].year + 1;
        const age = _rows[i-1].age + 1;
        const ob = _rows[i-1].getClosingBalance(_settings.growthRate);
        const contributions = _rows[i-1].contributions * (1 + _settings.contributionIncreaseRate);
        let newRow = new TableRow(period, year, age, ob, contributions);
        _rows.push(newRow);
        //console.log(rows);
      }
      setRows(_rows);
      console.log('rows', rows);
    //let table = new TableDisplay(rows);
}
  return (
    <div className="container">
      <InputGroup onFormSubmit={onFormSubmit} 
        errorMessages={errorMessages}
        yearError={yearError}
        ageError={ageError}
        obError={obError}
        startConError={startConError}
        numOfPError={numOfPError}
        contrIncrError={contrIncrError}
        growthRateError={growthRateError}
        />
      {/* <TableDisplay /> */}
      <table>
            <thead>
                <tr>
                    <th>Period</th>
                    <th>Year</th>
                    <th>Age</th>
                    <th>Opening balance</th>
                    <th>Contributions</th>
                    <th>Interest on contributions</th>
                    <th>Interest on OB</th>
                    <th>Closing balance</th>
                </tr>
            </thead>
            <tbody id="table-body">
              {rows.map((row)=>{
                const nfObject = new Intl.NumberFormat('en-US');
                return (
                  <tr key={row.period}>
                    <td>{row.period}</td>
                    <td>{row.year}</td>
                    <td>{row.age}</td>
                    <td>{nfObject.format(Math.round(row.openingBalance))}</td>
                    <td>{nfObject.format(Math.round(row.contributions))}</td>
                    <td>{nfObject.format(Math.round(row.getInterestOnContributions(settings.growthRate)))}</td>
                    <td>{nfObject.format(Math.round(row.getInterestOnOpeningBalance(settings.growthRate)))}</td>
                    <td>{nfObject.format(Math.round(row.getClosingBalance(settings.growthRate)))}</td>
                </tr>
                )
              })}
            </tbody>
        </table>

    </div>
  );
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

export default App;
