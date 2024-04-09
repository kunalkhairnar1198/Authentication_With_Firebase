import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import { AuthContext } from '../Store/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const MainNavigation = () => {
  const {token, logout, isLogedIn} = useContext(AuthContext)
  const history = useHistory()
  const isLoggedIn  = isLogedIn

  const onlogOutHandler =()=>{
    console.log('USER LOGOUT')
    logout()
    history.push('/auth')
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
