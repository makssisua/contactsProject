import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Navigation.scss"

export const Navigation = () => {
  let url = useLocation();
  
  return (
      <ul className="navigation">
        <li className="navigation__button">
          <Link 
            className={url.pathname === '/' 
              ? 'navigation__button--active-link' 
              : 'navigation__button--link'
            }
            to="/"
          >
            home
          </Link>
        </li>
        <li className="navigation__button">
          <Link 
            className={url.pathname === '/contacts' 
            ? 'navigation__button--active-link' 
            : 'navigation__button--link'
          } 
            to="/contacts"
          >
            contacts
          </Link>
        </li>
        <li className="navigation__button">
          <Link 
            className={url.pathname === '/about' 
            ? 'navigation__button--active-link' 
            : 'navigation__button--link'
          } 
            to="/about"
          >
            about
          </Link>
        </li>
      </ul>
  )
}