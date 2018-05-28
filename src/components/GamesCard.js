import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';

const GamesCard = ({game, toggleFeatured}) => (
    <div className="ui card">
        <Featured featured={game.featured} toggleFeatured={toggleFeatured}/>
        <div className="image">
            <Price price={game.price}/>
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
        .shape({price: PropTypes.string.isRequired, name: PropTypes.string.isRequired, players: PropTypes.string.isRequired, duration: PropTypes.string.isRequired, featured: PropTypes.string.isRequired})
        .isRequired,
    toggleFeatured: PropTypes.func.isRequired
}

export default GamesCard