import "./App.css";
import Employee from "./Components/Employee";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Dev");
  const [employee, setEmployees] = useState([
    {
      name: "Hetheo",
      role: "Developer",
      img:
        "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Aries",
      role: "Developer",
      img:
        "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Sephiroth",
      role: "Developer",
      img:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      ></input>
      <div>
        {employee.map((employee) => {
          return (
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              alt="people"
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
