import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


import Navbar from './components/Header'
import Footer from './components/Footer'

import Courses from './course_view/CoursesView'
import { loadCourses, loadSubjects } from './store/actions';
import {courses, subjects} from './data/mockCourses'

class App extends React.Component {

  courseList = () => courses()
  subjectList = () => subjects()

  componentDidMount() {
    this.props.loadCourses(this.courseList())
    this.props.loadSubjects(this.subjectList())
  }

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
            <Courses />
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


export default connect(null, {loadCourses, loadSubjects})(App);
