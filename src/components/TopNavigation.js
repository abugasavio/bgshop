import React from 'react';
import PropTypes from 'prop-types';

const TopNavigation = ({showGameForm, showLoginForm, showSignupForm}) => (
    <div className="ui secondary pointing menu">
        <a href="/" className="item">BGShop</a>
        <a className="item" onClick={showGameForm}>
            <i className="icon plus"></i>Add New Game
        </a>
        <a className="item" onClick={showLoginForm}>
            <i className="icon plus"></i>Login
        </a>
        <a className="item" onClick={showSignupForm}>
            <i className="icon plus"></i>Signup
        </a>
    </div>
)

TopNavigation.propTypes = {
    showGameForm: PropTypes.func.isRequired,
    showLoginForm: PropTypes.func.isRequired,
    showSignupForm: PropTypes.func.isRequired
};

export default TopNavigation