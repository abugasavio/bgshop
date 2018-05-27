import React from 'react';
import PropTypes from 'prop-types';

const GamesCard = ({game}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">${game.price}</span>
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

GamesCard.propTypes = {
    game: PropTypes
        .shape({price: PropTypes.string.isRequired, name: PropTypes.string.isRequired, players: PropTypes.string.isRequired, duration: PropTypes.string.isRequired})
        .isRequired
}

export default GamesCard