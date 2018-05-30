import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { createStudent, updateStudent } from '../../actions/students';
import { findById } from '../../lib/id';

class StudentsForm extends Component {
  constructor() {
    super();

    this.handlers = [];

    this.state = {
      firstName: '',
      lastName: '',
      group: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return Object.assign({}, prevState, nextProps.student || {});
  }

  isNewStudent() {
    return !this.props.match.params.id;
  }

  onFieldChange = field => {
    if (!this.handlers[field]) {
      this.handlers[field] = e => {
        const value = e.target.value;
        this.setState(() => ({ [field]: value }));
      }
    }

    return this.handlers[field];
  }

  onSubmit = (e) => {
    const student = this.state;

    if (this.isNewStudent()) {
      this.props.onCreate(student);
    } else {
      this.props.onUpdate(student);
    }

    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="firstName">First name*:</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={this.state.firstName}
              onChange={this.onFieldChange('firstName')}
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastName">Last name*:</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={this.state.lastName}
              onChange={this.onFieldChange('lastName')}
            />
          </FormGroup>

          <FormGroup>
            <Label for="group">Group*:</Label>
            <Input
              type="text"
              name="group"
              id="group"
              required
              value={this.state.group}
              onChange={this.onFieldChange('group')}
            />
          </FormGroup>

          <FormGroup>
            <Input type="submit" value="Submit" />
          </FormGroup>
        </Form>

        <Link to="/">Back</Link>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ students }, ownProps) => ({
  student: findById(students, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate(data) {
    dispatch(createStudent(data));
    dispatch(push('/'));
  },

  onUpdate(data) {
    dispatch(updateStudent(ownProps.match.params.id, data));
    dispatch(push('/'));
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(StudentsForm);
