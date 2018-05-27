import React from 'react';
import GamesCard from './GamesCard';
import PropTypes from 'prop-types';

const GamesList = ({games}) => {
    return (
        <div className="ui four cards">
            {games.map(game => <GamesCard game={game} key={game._id}/>)}
        </div>
    );
};

GamesList.propTypes = {
    games: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired
};

export default GamesList;