import React from "react";
import ListItem from "./ListItem";

function Todolist(props) {
  return (
    <ul>
      {props.listData.map((item) => {
        return <ListItem checked={item.checked} titleStr={item.title} />;
      })}
    </ul>
  );
}
export default Todolist;
