import './App.css';
import PersonCard from "./components/PersonCard";
import React from "react";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Nick"} lastName={"Goodwin"} hairColor={"Brown"} age={"29"}/>
      <PersonCard firstName={"Amanda"} lastName={"Brazell"} hairColor={"Brown"} age={"53"}/>
      <PersonCard firstName={"Chris"} lastName={"Goodwin"} hairColor={"Brown"} age={"34"}/>
      <PersonCard firstName={"Dave"} lastName={"Matthews"} hairColor={"Black"} age={"55"}/>
    </div>
  );
}

export default App;
