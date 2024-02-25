import "./TextButton.scss";
function TextButton(props) {
  return (
    <button className="text-button" color={props.color}>
      {props.text ?? "Login"}
    </button>
  );
}

export default TextButton;
