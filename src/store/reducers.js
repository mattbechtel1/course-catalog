import { combineReducers } from 'redux' 

function userReducer(state=null, action) {
    return state
}

function coursesReducer(state=[], action) {
    return state
}

function courseReducer(state=null, action) {
    return state
}

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    course: courseReducer
})

export default rootReducer