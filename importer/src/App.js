import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import All from './Pages/All/All.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={All} />
      </Switch>
    </div>
  );
}

export default App;
