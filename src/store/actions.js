export function loadCourses(courseList) {
    return {type: 'LOAD_COURSES', courses: courseList }
}

export function loadSubjects(subjectList) {
    return {type: 'LOAD_SUBJECTS', subjects: subjectList }
}