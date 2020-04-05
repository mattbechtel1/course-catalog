import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


import Navbar from './components/Header'
import Footer from './components/Footer'

import Courses from './course_view/CoursesView'
import FavHeader from './components/FavHeader'
import { loadCourses, loadSubjects, logUserIn } from './store/actions';
import {courses, subjects, users} from './data/mockData'

class App extends React.Component {

  courseList = () => courses()
  subjectList = () => subjects()
  user = () => users().find(user => user.id === 3)

  componentDidMount() {
    this.props.loadCourses(this.courseList())
    this.props.loadSubjects(this.subjectList())

    // logs in user by default for component testing
    this.props.logUserIn(this.user())
  }

  render() {
    const user = this.props.user

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
            {user ? <Courses /> : <Redirect to='/' /> }
          </Route>

          <Route path='/profile'>

          </Route>

          <Route path='/login'>

          </Route>

          <Route path='/register'>

          </Route>

          <Route path='/favorites'>
            {user ? <Courses title={FavHeader} /> : <Redirect to='/login' />}
          </Route>

          <Route path='/logout'>

          </Route>
        </Switch>
      </Router>

      {/* <Footer /> */}
      </div>
    );
  }
}

export default connect(({user}) => ({user}), {loadCourses, loadSubjects, logUserIn})(App);