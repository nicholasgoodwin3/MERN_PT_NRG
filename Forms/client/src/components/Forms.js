import React, { useState } from 'react';



const Form = (props) => {
const [ firstName, setFirstName ] = useState("");
const [ lastName, setLastName ] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ confirmPassword, setConfirmPassword] = useState("");

return (
    <div>
        <form>
            <label htmlFor="firstName">First Name:</label>
            <input 
                type="text" 
            name="firstName"
            onChange={ (e) => setFirstName(e.target.value)}/>
        {firstName.length < 2 && firstName.length > 0 ? (
            <p>First Name must be at least 2 characters</p>
        ) : null}
        <div>
            <label htmlFor="lastName">Last Name:</label>
        <input 
            type="text" 
            name="lastName" 
            onChange={ (e) => setLastName(e.target.value)}/>
        </div>
        {lastName.length < 2 && lastName.length > 0 ? (
            <p>Last Name must be at least 2 characters</p>
        ) : null}
        <div>
        <label htmlFor="email">Email:</label>
        <input 
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        {email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
        <div>
        <label htmlFor="password">Password:</label>
        <input 
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        {password.length < 8 ? (
            <p>Password must be at least 8 characters</p>) : null}
        <div>
        <label htmlFor="confirmPassord">Confirm Password:</label>
            <input 
                type="password" 
                name="confirmPassword" 
                onChange={ (e) => setConfirmPassword(e.target.value) }
            />
        </div>
        {confirmPassword !== password ? <p>Passwords must match</p>: null}
    </form>

    <div>
        <h3>Your Form Data</h3>
            <p>
                <label>First Name: </label>{ firstName }
            </p>
            <p>
                <label>Last Name: </label>{ lastName }
            </p>
            <p>
                <label>Email: </label>{ email }
            </p>
            <p>
                <label>Password: </label>{ password }
            </p>
            <p>
                <label>Confirm Password: </label>{ confirmPassword }
            </p>
        </div>
    </div>
    )
}

export default Form;