import './App.css';
import PersonCard from "./components/PersonCard";
import React from "react";

const peopleArr = [
  {
    firstName: "Nick",
    lastName: "Goodwin",
    age: 29,
    hairColor: "Brown",
  },
  {
    firstName: "Chris",
    lastName: "Goodwin",
    age: 33,
    hairColor: "brown",
  },
  {
    firstName: "Dave",
    lastName: "Matthews",
    age: 53,
    hairColor: "Black",
  },
  {
    firstName: "Amanda",
    lastName: "Brazell",
    age: 53,
    hairColor: "Brown",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
