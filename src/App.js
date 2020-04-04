import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">

      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'>

          </Route>
          
          <Route path='/register'>

          </Route>

          <Route path='/home'>
            <Redirect to='/' />
          </Route>

          <Route path='/courses/:id'>

          </Route>

          <Route path='/courses'>

          </Route>

          <Route path='/profile'>
            
          </Route>

          <Route path='/login'>

          </Route>

          <Route path='/register'>

          </Route>

          <Route path='/saved'>

          </Route>

          <Route path='/logout'>

          </Route>
        </Switch>
      </Router>

      <Footer />
      </div>
    );
  }
}

export default App;
