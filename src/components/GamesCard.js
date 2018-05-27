import React from 'react';

const GamesCard = ({game}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">{game.price}</span>
            <img src={game.thumbnail} alt="Very Nice Image"/>
        </div>
        <div className="content">
            <a href="#" className="header">{game.name}</a>
            <div className="meta">
                <i className="icon user"/>{game.players}&nbsp;
                <i className="icon user"/>{game.duration}
                min
            </div>
        </div>
    </div>
)

export default GamesCard