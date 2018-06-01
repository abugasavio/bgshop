import React from "react";
import _orderBy from "lodash/orderBy";
import GamesList from "./GamesList";
import GamesForm from "./GamesForm";
import TopNavigation from "./TopNavigation";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

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

const games = [
    {
        _id: 1,
        name: "Milele",
        thumbnail: "https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=" +
                "tinysrgb&dpr=2&h=750&w=1260",
        price: "29.99",
        players: "2-5",
        duration: "45",
        featured: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                " officia deserunt mollit anim id est laborum."
    }, {
        _id: 2,
        name: "Superman",
        thumbnail: "https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compress&c" +
                "s=tinysrgb&dpr=2&h=750&w=1260",
        price: "29.99",
        players: "2-5",
        duration: "45",
        featured: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                " officia deserunt mollit anim id est laborum."
    }, {
        _id: 3,
        name: "Kila kitu",
        thumbnail: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&c" +
                "s=tinysrgb&h=750&w=1260",
        price: "29.99",
        players: "2-5",
        duration: "45",
        featured: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                " officia deserunt mollit anim id est laborum."
    }
];

class App extends React.Component {
    state = {
        games: [],
        showGameForm: false,
        showSignupForm: false,
        showLoginForm: false
    };

    componentDidMount() {
        this.setState({
            games: this.sortGames(games)
        });
    }

    sortGames(games) {
        return _orderBy(games, [
            "featured", "name"
        ], ["desc", "asc"]);
    }

    addGame = game => this.setState({
        showGameForm: false,
        games: this.sortGames([
            ...this.state.games, {
                ...game,
                _id: this.state.games.length + 1
            }
        ])
    })

    toggleFeatured = gameId => this.setState({
        games: this.sortGames(this.state.games.map(game => gameId === game._id
            ? {
                ...game,
                featured: !game.featured
            }
            : game))
    });

    showGameForm = () => this.setState({showGameForm: true});
    hideGameForm = () => this.setState({showGameForm: false});
    showSignupForm = () => this.setState({showSignupForm: true});
    showLoginForm = () => this.setState({showLoginForm: true});
    hideSignupForm = () => this.setState({showSignupForm: false});
    hideLoginForm = () => this.setState({showLoginForm: false});

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
                            submit={this.addGame}/>)}
                        {this.state.showSignupForm && (<SignupForm hideSignupForm={this.hideSignupForm}/>)}
                        {this.state.showLoginForm && (<LoginForm hideLoginForm={this.hideLoginForm}/>)}
                    </div>
                    <div className={`${numberOfColumns} wide column`}>
                        <GamesList games={this.state.games} toggleFeatured={this.toggleFeatured}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
