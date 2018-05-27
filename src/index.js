import React from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import GameCard from './components/GameCard';

const games = [
    {
        "name": "Roll for the Galaxy",
        "thumbnail": "https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compress&c" +
                "s=tinysrgb&dpr=2&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45"
    }, {
        "name": "Roll for the Galaxy",
        "thumbnail": "https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compress&c" +
                "s=tinysrgb&dpr=2&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45"
    }, {
        "name": "Roll for the Galaxy",
        "thumbnail": "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&c" +
                "s=tinysrgb&h=750&w=1260",
        "price": "29.99",
        "players": "2-5",
        "duration": "45"
    }

]

render(
    <GameCard game={games[2]}/>, document.getElementById('root'));
