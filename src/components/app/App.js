import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './../../pages/homepage/homepage.component'
import ShopPage from './../../pages/shop/shop.component'
import Header from '../header/header.component'
import SignInAndSignOut from '../../pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { auth } from './../../firebase/firebase.utils'

import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignOut}/>
      </Switch>
    </div>
  )}

}

export default App