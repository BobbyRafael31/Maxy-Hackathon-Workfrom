import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const UserNavBar = () => {
  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo' />
          </NavLink>

          <a href=":" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <div className='navbar-item'></div>
        </div>

        <div className="navbar-start">
            <div className='navbar-item has-dropdown is-hoverable'>
                    <a class="navbar-link  has-text-weight-bold">
                        Locations
                    </a>
                    <div class="navbar-dropdown">
                         <a class="navbar-item">
                            Medan
                        </a>
                        <a class="navbar-item">
                            Jakarta
                        </a>
                 </div>
            </div>
            <div className='navbar-item has-dropdown is-hoverable'>
                    <a class="navbar-link  has-text-weight-bold">
                        Use Case
                    </a>
                    <div class="navbar-dropdown">
                         <a class="navbar-item">
                            Event
                        </a>
                        <a class="navbar-item">
                            Meeting
                        </a>
                        <a class="navbar-item">
                            Photo Shoot
                        </a>
                        <a class="navbar-item">
                            Video Shoot
                        </a>
                        
                 </div>
            </div>
        </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-light has-text-weight-bold">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavBar;
