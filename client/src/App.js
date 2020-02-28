import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
