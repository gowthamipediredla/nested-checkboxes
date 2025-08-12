import { useState } from "react";
import "./styles.css";
import { CheckBoxes } from "./CheckBoxes";
import { nestedCheckboxData } from "./data";

export default function App() {
  const [checked, setChecked] = useState({});
  return (
    <div className="App">
      <h1>Hello Nested Checkboxes</h1>
      <CheckBoxes
        CheckBoxesData={nestedCheckboxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
