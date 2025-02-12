import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  function handleSubmit(event){
    event.preventDefault();

    
    console.log('user email : ' + enteredValues.email); 
    console.log('user password : ' + enteredValues.password); 
  }
  
  function handleInputChange(event){
    setEnteredValues((preValues) => ({
      ...preValues,
      [event.target.id]: event.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={handleInputChange}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={handleInputChange}
            value={enteredValues.password}  
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
