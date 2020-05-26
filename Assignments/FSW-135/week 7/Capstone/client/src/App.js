
import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
//import Public from './components/Public.js'
//import Issues from "./components/Issues"
import Footer from "./components/Footer"
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider.js'
import Public from './components/Public.js'

export default function App(){
  const { token, logout} = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar logout={ logout } /> }
      <Switch>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute 
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path="/public"
          component={Public}
          redirectTo="/"
          token={token}
        />
        <Footer />
      </Switch>
    </div>
  )
}