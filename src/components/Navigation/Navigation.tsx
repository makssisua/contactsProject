import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss"

export const Navigation = () => {
  return (
      <ul className="navigation">
        <li className="navigation__button navigation__button"><Link to="/">home</Link></li>
        <li className="navigation__button"><Link to="/contacts">contacts</Link></li>
        <li className="navigation__button"><Link to="/about">about</Link></li>
      </ul>
  )
}