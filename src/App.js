import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


import Navbar from './components/Header'
import Footer from './components/Footer'

import Courses from './course_view/CoursesView'
import FavHeader from './components/FavHeader'
import Profile from './components/Profile'
import Logout from './components/Logout'
import Login from './components/Login'
import CourseInfoPage from './course_view/CourseInfoPage'
import { loadCourses, loadSubjects, logUserIn } from './store/actions';
import {courses, subjects} from './data/mockData'

class App extends React.Component {

  courseList = () => courses()
  subjectList = () => subjects()

  componentDidMount() {
    this.props.loadCourses(this.courseList())
    this.props.loadSubjects(this.subjectList())
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
            {user ? <CourseInfoPage /> : <Redirect to='/' />}
          </Route>

          <Route path='/courses'>
            {user ? <Courses /> : <Redirect to='/' /> }
          </Route>

          <Route path='/profile'>
            {user ? <Profile /> : <Redirect to='/' />}
          </Route>

          <Route path='/login'>
            {user ? <Redirect to='/' /> : <Login />}
          </Route>

          <Route path='/register'>

          </Route>

          <Route path='/favorites'>
            {user ? <Courses title={FavHeader} /> : <Redirect to='/login' />}
          </Route>

          <Route path='/logout'>
            <Logout />
          </Route>
        </Switch>
      </Router>

      {/* <Footer /> */}
      </div>
    );
  }
}

export default connect(({user}) => ({user}), {loadCourses, loadSubjects, logUserIn})(App);