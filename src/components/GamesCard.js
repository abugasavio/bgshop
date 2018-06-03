import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";
import Featured from "./Featured";

class GamesCard extends React.Component {
  state = {
    showImage: true
  };

  toggleShowImage = () => this.setState({
    showImage: !this.state.showImage
  });

  render() {
    const {game, toggleFeatured, editGame} = this.props;
    return (
      <div className="ui card">
        <Featured
          featured={game.featured}
          toggleFeatured={toggleFeatured}
          gameId={game._id}/>
        <div className="image">
          <Price price={game.price}/>{" "} {this.state.showImage
            ? (<img src={game.thumbnail} alt="Very Nice"/>)
            : (
              <div className="description">
                <p>{game.description}</p>
              </div>
            )}
        </div>
        <div className="content">
          <a className="header">
            {game.name}
          </a>
          <div className="meta">
            <i className="icon user"/> {game.players}&nbsp;
            <i className="icon user"/> {game.duration}
            min
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <a className="ui basic button red" onClick={() => editGame(game)}>
              <i className="ui icon edit"/>
            </a>
            <a className="ui basic button green">
              <i className="ui icon trash"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

GamesCard.propTypes = {
  game: PropTypes
    .shape({
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    featured: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
    .isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired
}

export default GamesCard;
