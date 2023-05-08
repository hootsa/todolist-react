import "./ListItem.css";

function ListItem(props) {
  const className = props.checked ? "checked" : "";
  // if (props.checked) {
  //   className = "checked";
  // }
  // if (props.checked) {
  return <li className={className}> {props.titleStr} </li>;
  // } else {
  //   return <li> {props.titleStr} </li>;
  // }
}

export default ListItem;
