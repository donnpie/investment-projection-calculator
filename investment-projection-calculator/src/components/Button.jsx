import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} class={props.class} id={props.id}>{props.caption}</button>
    )
}

export default Button;