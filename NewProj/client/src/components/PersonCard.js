import React from "react";

const PersonCard = (props) => {
const { firstName, lastName, hairColor, age } = props;
return (
    <div className="container">
    <h1>
        {firstName} {lastName}
    </h1>
    <p>Hair Color: {hairColor}</p>
    <p>Age: {age}</p>
    </div>
);
}
export default PersonCard;