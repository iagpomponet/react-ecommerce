import React from 'react';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css'

import { Route, Switch } from 'react-router-dom'; 


function App() {
  return <div>
    {/* switch nao renderiza nada depois de achar uma url que bata */}
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
    
  </div>
}

export default App;
