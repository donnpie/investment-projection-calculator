import React from 'react';
import InputBox from "./InputBox";
import Button from "./Button";


const InputGroup = ({onFormSubmit, errorMessages, yearError, ageError, obError, startConError, numOfPError, contrIncrError, growthRateError}) => {


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

export default InputGroup;