import {
  SET_STUDENTS
} from '../actions/students';

export default function students(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
