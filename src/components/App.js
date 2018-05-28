import React from 'react';
import GamesList from './GamesList';
import _orderBy from 'lodash/orderBy';
import GamesForm from './GamesForm';

const games = [
    {
        "_id": 1,
        "name": "Milele",
        "thumbnail": "https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=" +
                "tinysrgb&dpr=2&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45",
        "featured": false,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                " officia deserunt mollit anim id est laborum."
    }, {
        "_id": 2,
        "name": "Superman",
        "thumbnail": "https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compress&c" +
                "s=tinysrgb&dpr=2&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45",
        "featured": false,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                " officia deserunt mollit anim id est laborum."
    }, {
        "_id": 3,
        "name": "Kila kitu",
        "thumbnail": "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&c" +
                "s=tinysrgb&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45",
        "featured": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                " officia deserunt mollit anim id est laborum."

    }

]

class App extends React.Component {
    state = {
        games: []
    }

    componentDidMount() {
        this.setState({
            games: this.sortGames(games)
        })
    }

    sortGames(games) {
        return _orderBy(games, [
            "featured", "name"
        ], ["desc", "asc"])
    }

    toggleFeatured = (gameId) => this.setState({
        games: this.sortGames(this.state.games.map(game => gameId === game._id
            ? {
                ...game,
                featured: !game.featured
            }
            : game))
    })

    render() {
        return (
            <div className="ui container"><GamesForm/><br/><GamesList games={this.state.games} toggleFeatured={this.toggleFeatured}/></div>
        )
    }
}

export default App;