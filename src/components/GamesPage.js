/* eslint class-methods-use-this: ["error", { "exceptMethods": ["sortGames", "componentDidMount"] }] */

import React from "react";
import _orderBy from "lodash/orderBy";
import _find from 'lodash/find';
import GamesList from "./GamesList";
import GamesForm from "./GamesForm";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
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
    showGameForm: false,
    showSignupForm: false,
    showLoginForm: false,
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

  showGameForm = () => this.setState({showGameForm: true, selectedGame: {}});
  hideGameForm = () => this.setState({showGameForm: false, selectedGame: {}});
  showSignupForm = () => this.setState({showSignupForm: true});
  showLoginForm = () => this.setState({showLoginForm: true});
  hideSignupForm = () => this.setState({showSignupForm: false});
  hideLoginForm = () => this.setState({showLoginForm: false});
  selectGameForEditing = game => this.setState({selectedGame: game, showGameForm: true})

  render() {
    const numberOfColumns = this.state.showGameForm || this.state.showSignupForm || this.loginForm
      ? "ten"
      : "sixteen";
    return (
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="six wide column">
            {this.state.showGameForm && (<GamesForm
              publishers={publishers}
              hideGameForm={this.hideGameForm}
              submit={this.saveGame}
              game={this.state.selectedGame}/>)}
            {this.state.showSignupForm && (<SignupForm hideSignupForm={this.hideSignupForm}/>)}
            {this.state.showLoginForm && (<LoginForm hideLoginForm={this.hideLoginForm}/>)}
          </div>
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
