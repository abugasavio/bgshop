import React from 'react';
import GamesList from './GamesList';
import _orderBy from 'lodash/orderBy';

const games = [
    {
        "_id": 1,
        "name": "Roll for the Galaxy",
        "thumbnail": "https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=" +
                "tinysrgb&dpr=2&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45",
        "featured": false
    }, {
        "_id": 2,
        "name": "ARoll for the Galaxy",
        "thumbnail": "https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compress&c" +
                "s=tinysrgb&dpr=2&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45",
        "featured": false
    }, {
        "_id": 3,
        "name": "Roll for the Galaxy",
        "thumbnail": "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&c" +
                "s=tinysrgb&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45",
        "featured": true
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
            <div className="ui container"><GamesList games={this.state.games} toggleFeatured={this.toggleFeatured}/></div>
        )
    }
}

export default App;