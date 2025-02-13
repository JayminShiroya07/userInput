import { useState } from "react";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });

    const emailIsInvalid = 
        didEdit.email &&  !enteredValues.email.includes('@');

    function handleSubmit(event) {
        event.preventDefault();


        console.log('user email : ' + enteredValues.email);
        console.log('user password : ' + enteredValues.password);
    }

    function handleInputChange(event) {
        setEnteredValues((preValues) => ({
            ...preValues,
            [event.target.id]: event.target.value
        }));
        
    }

    function handleInputBlur(event){
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [event.target.id]: true
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
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        value={enteredValues.email}
                    />
                    <div className="control-error">
                        {
                            emailIsInvalid
                            &&
                            <p>Plase enter a valid emails address.</p>
                        }
                    </div>
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
