import React from "react";
import { useState } from "react";

const PersonCard = (props) => {
const { firstName, lastName, hairColor, age } = props;
const [stateAge, setStateAge] = useState(age);
return (
    <div className="container">
    <h1>
        {firstName} {lastName}
    </h1>
    <p>Hair Color: {hairColor}</p>
    <p>Age: {stateAge}</p>
    <button onClick={() => setStateAge(stateAge + 1)}>Happy Birthday!!!!!</button>
    </div>
);
}
export default PersonCard;