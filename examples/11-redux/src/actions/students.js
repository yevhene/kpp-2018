import * as studentsApi from '../api/students';

export const SET_STUDENTS = 'SET_STUDENTS';

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students
});

export const loadStudents = () => (
  studentsApi
    .index()
    .then((students) => setStudents(students))
);

export const createStudent = (data) => (
  studentsApi
    .create(data)
    .then(loadStudents)
);

export const updateStudent = (id, data) => (
  studentsApi
    .update(Object.assign({ id }, data))
    .then(loadStudents)
);

export const deleteStudent = (id) => (
  studentsApi
    .destroy(id)
    .then(loadStudents)
);
