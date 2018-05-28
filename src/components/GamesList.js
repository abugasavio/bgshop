import React from 'react';
import GamesCard from './GamesCard';
import Message from './Message';
import PropTypes from 'prop-types';

const GamesList = ({games, toggleFeatured}) => {
    return (
        <div className="ui four cards">
            {games.length === 0
                ? (<Message content="No Games here" type="warning" header="sorry"/>)
                : (games.map(game => <GamesCard game={game} key={game._id} toggleFeatured={toggleFeatured}/>))
}
        </div>
    );
};

GamesList.propTypes = {
    games: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired,
    toggleFeatured: PropTypes.func.isRequired
};

GamesList.defaultProps = {
    games: []
};

export default GamesList;