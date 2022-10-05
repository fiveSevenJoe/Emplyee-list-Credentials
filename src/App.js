import "./App.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Dev");

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      ></input>
      <Employee name="Natalie" role={role} />
      <Employee name="Sofia" role="Creator" />
      <Employee name="Amanda" role="Managment" />
    </div>
  );
}

export default App;
