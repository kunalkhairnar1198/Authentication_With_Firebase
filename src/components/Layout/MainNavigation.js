import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import { AuthContext } from '../Store/AuthContext';

const MainNavigation = () => {
  const {token, logout, isLogedIn} = useContext(AuthContext)

  const isLoggedIn  = isLogedIn

  const onlogOutHandler =()=>{
    console.log('USER LOGOUT')
    logout()
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn &&(
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn &&(
          <li>
            <button onClick={onlogOutHandler}>LogOut</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
