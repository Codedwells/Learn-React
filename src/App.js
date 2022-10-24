import { useState } from "react";
import Input from "./components/Input";
// import arr from "./components/array";
// import Boxes from "./components/Boxes";

function App() {
  // const [box, setBox] = useState(arr);

  // function changeColor(id) {
  //   var newBoxes = [...box];
  //   for (let i of newBoxes) {
  //     if (i.id === id) {
  //       i.location === true ? (i.location = false) : (i.location = true);
  //     }
  //   }
  //   setBox(newBoxes);
  // }
  // const mapped = box.map((curr) => (
  //   <div
  //   style={{
  //     display: "grid",
  //     gridTemplateColumns: "1fr 1fr 1fr",
  //     border: "2px solid black",
  //     margin: "10px",
  //     borderRadius: "10px",
  //     padding: "15px",
  //   }}
  // >
  //  <Boxes key={curr.id} curr={curr} toggling={changeColor} />
  // </div>
  // ))
  const [input, setInput] = useState("");
  var arr = [];
  var in1, in2;
  in1=input
  const change = (e) => {
    if (e.target.placeholder === "Type here...") {
      setInput(e.target.value);
      in1 = input;
    } else if (e.target.placeholder === "Type again here...") {
      setInput(e.target.value);
      in2 = input;
    }
    console.log(in2)
    console.log(e.target.placeholder);
    //setInput(e.target.value);
  };

  return (
    <>
      <Input change={change} />
      <div
        style={{
          backgroundColor: "aqua",
          display: "inline-block",
          width: "200px",
        }}
      >
        {in1}
      </div>
      <div
        style={{
          backgroundColor: "aqua",
          display: "inline-block",
          width: "200px",
        }}
      >
        {in2}
      </div>
    </>
  );
}

export default App;
