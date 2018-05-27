import React from 'react';
import GamesCard from './GamesCard';

const GamesList = ({games}) => {
    return (
        <div className="ui four cards">
            {games.map(game => <GamesCard game={game} key={game._id}/>)}
        </div>
    );
};

export default GamesList;