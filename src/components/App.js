import React from 'react';
import GamesList from './GamesList';

const games = undefined;

// const games = [     {         "_id": 1,         "name": "Roll for the
// Galaxy",         "thumbnail":
// "https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&
// cs=" +                 "tinysrgb&dpr=2&h=750&w=1260",         "price":
// "29.99",         "players": "2-5",         "duration": "45"     }, {
// "_id": 2,         "name": "Roll for the Galaxy",         "thumbnail":
// "https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compres
// s&c" +                 "s=tinysrgb&dpr=2&h=750&w=1260",         "price":
// "29.99",         "players": "2-5",         "duration": "45"     }, {
// "_id": 3,         "name": "Roll for the Galaxy",         "thumbnail":
// "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compres
// s&c" +                 "s=tinysrgb&h=750&w=1260",         "price": "29.99",
//       "players": "2-5",         "duration": "45"     } ]

const App = () => (
    <div className="ui container"><GamesList games={games}/></div>
)

export default App;