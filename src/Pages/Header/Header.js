import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div>
            <div className='navbar-item'>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link to="/goal">
                                GOAL
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/activity">
                               ACTIVITY
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/profile">
                                PROFILE
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/selectCoach">
                               SELECT COACH
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
