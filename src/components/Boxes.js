import { React } from "react";

const Boxes = (props) => {
  var styles = {
    backgroundColor: props.curr.location === true ? "aqua" : "purple",
    color: props.curr.location === true ? "black" : "white",
  };
  return (
    <div
      style={styles}
      className="boxx"
      onClick={() => props.toggling(props.curr.id)}
    >
      {props.curr.name}
    </div>
  );
};

export default Boxes;
