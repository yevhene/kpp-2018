import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Button, ButtonGroup } from 'reactstrap';

import { deleteStudent } from '../../actions/students';
import { findById } from '../../lib/id';

const StudentsShow = ({
  student,
  onEdit, onDestroy
}) =>
  <div>
    <h1>{student.lastName} {student.firstName}</h1>

    <dl>
      <dt>Group:</dt><dd>{student.group}</dd>
    </dl>

    <ButtonGroup>
      <Button color="primary" onClick={onEdit}>Edit</Button>
      <Button color="danger" onClick={onDestroy}>Destroy</Button>
    </ButtonGroup>

    <div>
      <Link to="/">Back</Link>
    </div>
  </div>

const mapStateToProps = ({ students }, ownProps) => {
  return ({
    student: findById(students, ownProps.match.params.id) || {}
  })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEdit() {
    dispatch(push(`/students/${ownProps.match.params.id}/edit`));
  },

  onDestroy() {
    dispatch(deleteStudent(ownProps.match.params.id));
    dispatch(push('/'));
  }
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(StudentsShow);
