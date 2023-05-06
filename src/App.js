import logo from './logo.svg';
import './App.css';
import React from'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:movieId" component={MovieDetail} />
        <Route path="/search" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default App;
