import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function renderStudents(students) {
  if (students.length > 0) {
    return students.map((student) =>
      <tr key={student.id}>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.group}</td>
        <td><Link to={`/students/${student.id}`}>Link</Link></td>
      </tr>
    );
  } else {
    return (<tr><td>No students</td></tr>);
  }
}

const StudentsIndex = ({ students }) =>
  <Fragment>
    <Table>
      <thead>
        <tr><th>First Name</th><th>Last Name</th><th>Group</th><th></th></tr>
      </thead>
      <tbody>
        {renderStudents(students)}
      </tbody>
    </Table>
    <Link to="/students/new">New</Link>
  </Fragment>

const mapStateToProps = ({ students }) => ({ students });

export default connect(mapStateToProps)(StudentsIndex);
