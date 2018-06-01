import React from 'react';

const LoginForm = ({hideLoginForm}) => {
    return (
        <form action="" class="ui form">
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
            </div>
            <div className="field">
                <label htmlFor="email">Password</label>
                <input type="password" name="email" id="email"/>
            </div>
            <div className="ui fluid buttons">
                <button className="ui button primary" type="submit">
                    Login
                </button>
                <div className="or"></div>
                <button className="ui button" onClick={hideLoginForm}>Cancel</button>
            </div>
        </form>
    );
};

export default LoginForm;