import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import { AuthContext } from './components/Store/AuthContext';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
const authCtx =  useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLogedIn &&(
        <Route path='/auth'>
          <AuthPage />
        </Route>
        )}
        {/* make dynmaic routes if the user is logedin then redirect userProfile Login page if your are loggedin to render profile page other else render second condition redirect the login page*/}
        <Route path='/profile'>
          {authCtx.isLogedIn && ( <UserProfile /> )}   
          {!authCtx.isLogedIn &&(<Redirect to='/auth' />)}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
