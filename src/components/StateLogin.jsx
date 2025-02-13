import { useState } from "react";
import Input from "./Input.jsx"
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChanage,
        handleInputBlur: handleEmailBlur,
        hasError : emailHasError
    } = useInput('',(val) => isEmail(val) && isNotEmpty(val) );

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChanage,
        handleInputBlur: handlePasswordBlur,
        hasError : passwordHasError
    } = useInput('',(val) => hasMinLength(val,6) );

  
    function handleSubmit(event) {
        event.preventDefault();

        if(emailHasError || passwordHasError)
            return;

        console.log('user email : ' + emailValue);
        console.log('user password : ' + passwordValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChanage}
                    value={emailValue}
                    error={emailHasError && "please enter a valid email!"}
                />

                <Input
                    label="password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChanage}
                    value={passwordValue}
                    error={passwordHasError && "please enter a valid password!"} 
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
