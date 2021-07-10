import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} className={props.class} id={props.id} onClick={props.onClick}>{props.caption}</button>
    )
}

export default Button;