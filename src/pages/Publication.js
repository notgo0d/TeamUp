import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Publications from './pages/Publications';

function Publication() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/publications" component={Publications} />
        </Switch>
      </div>
    </Router>
  );
}

export default Publication;





