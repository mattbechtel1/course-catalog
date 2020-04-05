export function loadCourses(courseList) {
    return {type: 'LOAD_COURSES', courses: courseList }
}

export function loadSubjects(subjectList) {
    return {type: 'LOAD_SUBJECTS', subjects: subjectList }
}

export function logUserIn(user) {
    return {type: 'LOG_USER_IN', user}
}

export function addFavorite(courseId) {
    return {type: 'ADD_FAVORITE', courseId}
}

export function unfavorite(courseId) {
    return {type: 'UNFAVORITE', courseId}
}

export function logout() {
    return {type: 'LOG_USER_OUT'}
}