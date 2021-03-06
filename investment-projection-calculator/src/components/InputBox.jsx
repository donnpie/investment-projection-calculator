import React from 'react';
import './InputBox.css';
const InputBox = (props) => {
    //const [value, setValue] = useState(props.defaultValue); 

    return (
        <input type={props.type} className={props.class} name={props.name} id={props.id} 
            placeholder={props.placeholder} min={props.min} max={props.max} defaultValue={props.defaultValue}
            step={props.step}/>
    )
}

export default InputBox;

//https://stackoverflow.com/questions/50029531/how-to-pass-a-default-value-to-an-input-in-react-using-props