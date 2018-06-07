import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Price from "./Price";
import Featured from "./Featured";

class GamesCard extends React.Component {
  state = {
    showImage: true,
    showConfirmation: false
  };

  toggleShowImage = () => this.setState({
    showImage: !this.state.showImage
  });

  showConfirmation = () => this.setState({showConfirmation: true})
  hideConfirmation = () => this.setState({showConfirmation: false})

  render() {
    const {game, toggleFeatured, editGame, deleteGame} = this.props;
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
          <Link to={`/game/${game._id}`} className="header">{game.name}</Link>
          <div className="meta">
            <i className="icon user"/> {game.players}&nbsp;
            <i className="icon user"/> {game.duration}
            min
          </div>
        </div>
        <div className="extra content">
          {this.state.showConfirmation
            ? <div className="ui two buttons">
                <a className="ui basic button grey" onClick={() => deleteGame(game)}>
                  <i className="ui icon check"/>YES
                </a>
                <a className="ui basic button grey" onClick={this.hideConfirmation}>
                  <i className="ui icon close"/>NO
                </a>
              </div>

            : <div className="ui two buttons">
              <a className="ui basic button green" onClick={() => editGame(game)}>
                <i className="ui icon edit"/>
              </a>
              <a className="ui basic button red" onClick={this.showConfirmation}>
                <i className="ui icon trash"/>
              </a>
            </div>
}

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
  editGame: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}

export default GamesCard;
