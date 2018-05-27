import React from 'react';

const GameCard = function () {
    return (
        <div className="ui card">
            <div className="image">
                <img
                    src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt=""/>
            </div>
            <div className="content">
                <div className="meta">
                    <i className="icon user"/>2-4&nbsp;
                    <i className="icon user"/>60 min
                </div>
            </div>
        </div>
    )
}

export default GameCard