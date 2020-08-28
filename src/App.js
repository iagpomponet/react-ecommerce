import React from 'react';
import HomePage from './pages/homepage.component';

import { Route, Switch } from 'react-router-dom'; 


function App() {
  return <div>
    {/* switch nao renderiza nada depois de achar uma url que bata */}
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
    
  </div>
}

export default App;
