import "./TextButton.scss";
function TextButton(props) {
  return (
    <button className="text-button" color={props.color} onClick={props.onClick}>
      {props.text ?? "Login"}
    </button>
  );
}

export default TextButton;
