import React from "react";
import PropTypes from "prop-types";
import GamesCard from "./GamesCard";
import Message from "./Message";

const GamesList = ({games, toggleFeatured, editGame, deleteGame}) => (
  <div className="ui four cards">
    {games.length === 0
      ? (<Message content="No Games here" type="warning" header="sorry"/>)
      : (games.map(game => (<GamesCard
        game={game}
        key={game._id}
        toggleFeatured={toggleFeatured}
        editGame={editGame}
        deleteGame={deleteGame}/>)))}
  </div>

);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  toggleFeatured: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
