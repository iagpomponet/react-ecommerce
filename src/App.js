import React from 'react';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Login from './pages/login/login.component'
import { setCurrentUser } from './redux/user/user.actions'; 

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


import './App.css'

import { Route, Switch } from 'react-router-dom'; 


class App extends React.Component { 
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });

      console.log(userAuth)

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot)

          setCurrentUser({
            currentUser: {
              id:  snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state)
        })
      } else {
        setCurrentUser({ currentUser : userAuth })
      } 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
      return <div>
        {/* switch nao renderiza nada depois de achar uma url que bata */}
        <Header path="/" />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);

