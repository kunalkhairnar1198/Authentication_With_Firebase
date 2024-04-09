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
        {authCtx.isLogedIn && (
        <Route path='/profile'>
          <UserProfile />
        </Route>
      )}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
