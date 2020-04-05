import React from 'react'
import {connect} from 'react-redux'
import FilterBar from './FilterBar'
import {courses} from '../data/mockCourses'

class Courses extends React.Component {
    constructor() {
        super()
        this.state = {
            textFilter: '',
            subjectFilter: '',
            favoritesFilter: false
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            courses: courses
        })
    }

    changeFilter = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    toggleFilter = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: !this.state[e.target.name]
        })
    }

    render() {
        return <>
            <FilterBar
                filter={this.changeFilter}
                toggle={this.toggleFilter}
                state={this.state}
            />
            <p>TextFilter: {this.state.textFilter}</p>
            <p>TopicFilter: {this.state.subjectFilter}</p>
            <p>FavoritesFilter: {this.state.favoritesFilter.toString()}</p>
        </>

    }
}

const mapStateToProps = ({user, courses}) => ({user, courses})

export default connect(mapStateToProps)(Courses)