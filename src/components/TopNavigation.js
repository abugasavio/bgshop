import React from 'react';
import {NavLink} from 'react-router-dom';

const TopNavigation = () => (
  <div className="ui secondary pointing menu">
    <NavLink exact to="/" className="item">BGShop</NavLink>
    <NavLink exact className="item" to="/games">
      Games
    </NavLink>
    <NavLink exact className="item" to="/games/new">
      <i className="icon plus"/>Add New Game
    </NavLink>
  </div>
)

export default TopNavigation
