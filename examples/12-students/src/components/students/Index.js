import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

import * as students from '../../api/students';

class StudentsIndex extends Component {
  constructor() {
    super();

    this.state = { students: [] };
  }

  componentDidMount() {
    students.index().then((students) =>
      this.setState(() => ({ students }))
    );
  }

  renderStudents() {
    if (this.state.students.length > 0) {
      return this.state.students.map((student) =>
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

  render() {
    return (
      <Fragment>
        <Table>
          <thead>
            <tr><th>First Name</th><th>Last Name</th><th>Group</th><th></th></tr>
          </thead>
          <tbody>
            {this.renderStudents()}
          </tbody>
        </Table>
        <Link to="/students/new">New</Link>
      </Fragment>
    );
  }
}

export default StudentsIndex;
