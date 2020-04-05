import React from 'react'
import {connect} from 'react-redux'


const Profile = ({user}) => <form>
    <div>
        <label for='username'>Username:</label>
        <input type='text' name='username' placeholder={user.username} />
    </div>
    <div>
        <label for='password'>Password:</label>
        <input type='password' name='password' placeholder={user.password} />
    </div>
    <div>
        <label for='email'>Email:</label>
        <input type='email' name='email' placeholder={user.email} />
    </div>
    <div>
        <label for='phone'>Phone:</label>
        <input type='tel' name='phone' placeholder={user.phone} />
    </div>
    <div>
        Courses Completed: {user.completedCourses.length}
    </div>
    <div>
        <button type='submit'>Save</button>
    </div>
</form> 

export default connect(({user}) => ({user}))(Profile)