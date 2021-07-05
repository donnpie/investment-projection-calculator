import InputBox from "./InputBox";
import Button from "./Button";

const InputGroup = () => {
    return (
        <>
            
            <InputBox type="number" class="input" id="year" placeholder="Start year" min="1900" max="2100" value="2021"/>
            <InputBox type="number" class="input" name="age" id="age" placeholder="Start age" min="0" max="130" value="42"/>
            <InputBox type="number" class="input" name="opening-balance" id="opening-balance" placeholder="Opening balance" step="0.01" min="0" value="400000"/>
            <InputBox type="number" class="input" name="contributions" id="contributions" placeholder="Start contribution" step="0.01" min="0" value="8000"/>
            <InputBox type="number" class="input" name="number-of-periods" id="number-of-periods" placeholder="Number of periods" min="0" value="30"/>
            <InputBox type="number" class="input" name="contribution-increase" id="contribution-increase" placeholder="Contribution increase" step="0.0001" min="0" max="1" value="0.02"/>
            <InputBox type="number" class="input" name="growth-rate" id="growth-rate" placeholder="Growth rate" step="0.0001" min="0" max="1" value="0.08"/>
            <Button type="submit" class="button" caption="Calculate"/>
            <Button type="button" class="button" id="clear-button" caption="Clear table" />

        </>
    )
}

export default InputGroup;