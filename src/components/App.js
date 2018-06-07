/* eslint class-methods-use-this: ["error", { "exceptMethods": ["sortGames", "componentDidMount"] }] */

import React from "react";
import _orderBy from "lodash/orderBy";
import GamesList from "./GamesList";
import GamesForm from "./GamesForm";
import TopNavigation from "./TopNavigation";
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

class App extends React.Component {
  state = {
    games: [],
    showGameForm: false,
    showSignupForm: false,
    showLoginForm: false,
    selectedGame: {}
  };

  componentDidMount() {
    api
      .games
      .fetchAll()
      .then(games => this.setState({
        games: this.sortGames(games)
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

  updateGame = game => this.setState({
    games: this.sortGames(this.state.games.map(item => item._id === game._id
      ? game
      : item)),
    showGameForm: false
  })

  deleteGame = game => this.setState({
    games: this
      .state
      .games
      .filter(item => item._id !== game._id)
  })

  toggleFeatured = gameId => this.setState({
    games: this.sortGames(this.state.games.map(game => gameId === game._id
      ? {
        ...game,
        featured: !game.featured
      }
      : game))
  });

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
        <TopNavigation
          showGameForm={this.showGameForm}
          showSignupForm={this.showSignupForm}
          showLoginForm={this.showLoginForm}/>
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
            <GamesList
              games={this.state.games}
              toggleFeatured={this.toggleFeatured}
              editGame={this.selectGameForEditing}
              deleteGame={this.deleteGame}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
