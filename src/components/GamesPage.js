/* eslint class-methods-use-this: ["error", { "exceptMethods": ["sortGames", "componentDidMount"] }] */

import React from "react";
import _orderBy from "lodash/orderBy";
import _find from 'lodash/find';
import {Route} from 'react-router-dom';
import GamesList from "./GamesList";
import GamesForm from "./GamesForm";
import api from '../api';

const publishers = [
  {
    _id: 1,
    name: "Milele"
  }, {
    _id: 2,
    name: "Uzima"
  }, {
    _id: 3,
    name: "Ujamaa"
  }
];

class GamesPage extends React.Component {
  state = {
    games: [],
    selectedGame: {},
    loading: true
  };

  componentDidMount() {

    api
      .games
      .fetchAll()
      .then(games => this.setState({
        games: this.sortGames(games),
        loading: false
      }))

  }

  sortGames(games) {
    return _orderBy(games, [
      "featured", "name"
    ], ["desc", "asc"]);
  }

  saveGame = gameData => api
    .games
    .create(gameData)
    .then(game => this.setState({
      games: this.sortGames({
        ...this.state.games,
        game
      }),
      showGameForm: false
    }));

  updateGame = gameData => api
    .games
    .update(gameData)
    .then(game => this.setState({
      games: this.sortGames(this.state.games.map(item => item._id === game._id
        ? game
        : item)),
      showGameForm: false
    }))

  deleteGame = game => api
    .games
    .delete(game)
    .then(this.setState({
      games: this
        .state
        .games
        .filter(item => item._id !== game._id)
    }))
  toggleFeatured = gameId => {
    const game = _find(this.state.games, {_id: gameId})
    return this.updateGame({
      ...game,
      featured: !game.featured
    })

  };

  selectGameForEditing = game => this.setState({selectedGame: game})

  render() {
    const numberOfColumns = this.props.location.pathname == '/games'
      ? "sixteen"
      : "ten";
    return (
      <div className="ui container">
        <div className="ui stackable grid">
          <Route
            path="/games/new"
            render={() => (
            <div className="six wide column"><GamesForm
              publishers={publishers}
              submit={this.saveGame}
              game={this.state.selectedGame}/>
            </div>
          )}/>

          <div className={`${numberOfColumns} wide column`}>
            {this.state.loading
              ? <div className="ui icon message">
                  <i className="notched circle loading icon"/>
                  <div className="content">
                    <div className="header">Wait a second</div>
                    <p>
                      Loading games collection
                    </p>
                  </div>
                </div>
              : (<GamesList
                games={this.state.games}
                toggleFeatured={this.toggleFeatured}
                editGame={this.selectGameForEditing}
                deleteGame={this.deleteGame}/>)
}
          </div>
        </div>
      </div>
    );
  }
}

export default GamesPage;
