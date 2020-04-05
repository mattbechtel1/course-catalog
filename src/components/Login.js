import React from 'react'
import {users} from '../data/mockData'
import {logUserIn} from '../store/actions'
import { connect } from 'react-redux'


class Login extends React.Component {
    userDirectory = () => users()
    
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            username: '',
            password: ''
        })
    }
    
    submitHander = (e) => {
        e.preventDefault()
        let user = this.userDirectory().find(user => user.username === this.state.username && user.password === this.state.password)
        
        if (user) {
            this.props.logUserIn(user)
        } else {
            alert("Username & Password combination not found. Please try again")
            this.resetForm()
        }
            
    }

    render() {
        return <form onSubmit={this.submitHander}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' value={this.state.username} onChange={this.changeHandler}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
            </div>
            <div>
                <button type='button' onClick={this.resetForm}>Reset Form</button>
                <button type='submit'>Log In</button>
            </div>
        </form>
    }
}

export default connect(null, {logUserIn})(Login)