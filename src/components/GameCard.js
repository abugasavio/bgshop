import React from 'react';

const GameCard = () => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">90.00</span>
            <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Very Nice Image"/>
        </div>
        <div className="content">
            <a href="#" className="header">Quadropolis</a>
            <div className="meta">
                <i className="icon user"/>2-4&nbsp;
                <i className="icon user"/>60 min
            </div>
        </div>
    </div>
)

export default GameCard