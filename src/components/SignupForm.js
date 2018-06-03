import React from 'react';

const SignupForm = ({hideSignupForm}) => (
  <form action="" className="ui form">
    <div className="field">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email"/>
    </div>
    <div className="field">
      <label htmlFor="email">Password</label>
      <input type="password" name="email" id="email"/>
    </div>
    <div className="field">
      <label htmlFor="email">Confirm Password</label>
      <input type="password" name="email" id="email"/>
    </div>
    <div className="ui fluid buttons">
      <button className="ui button primary" type="submit">
        Signup
      </button>
      <div className="or"/>
      <button className="ui button" onClick={hideSignupForm}>Cancel</button>
    </div>
  </form>
);

export default SignupForm;
