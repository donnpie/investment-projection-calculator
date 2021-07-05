import './InputBox.css';
const InputBox = (props) => {
    return (
        <input type={props.type} class={props.class} name={props.name} id={props.id} placeholder={props.placeholder} min={props.min} max={props.max} value={props.value}/>
    )
}

export default InputBox;