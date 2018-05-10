const students = [{
  id: 1,
  firstName: 'Vasya',
  lastName: 'Pupkin',
  group: '1ПІ-16'
}, {
  id: 2,
  firstName: 'Petro',
  lastName: 'Pupkin',
  group: '1ПІ-16'
}];

export function index() {
  return Promise.resolve(students);
}

export function show(id) {
  const student = findById(id);

  return Promise.resolve(student);
}

export function destroy(id) {
  const index = students.findIndex((s) => s.id.toString() === id.toString());
  students.splice(index, 1);

  return Promise.resolve(index);
}

export function create(studentData) {
  const student = Object.assign({}, studentData);
  student.id = nextId();
  students.push(student);

  return Promise.resolve(student);
}

export function update(studentData) {
  const student = findById(studentData.id);

  Object.assign(student, studentData);

  return Promise.resolve(student);
}

function nextId() {
  return Math.max(...students.map((s) => s.id)) + 1;
}

function findById(id) {
  return students.find((s) => s.id.toString() === id.toString());
}
