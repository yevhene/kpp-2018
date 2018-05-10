import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import * as students from '../../api/students';

class StudentsForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      group: ''
    };
  }

  componentDidMount() {
    if (!this.isNewStudent()) {
      students.show(this.props.match.params.id).then((student) =>
        this.setState(() => ({ ...student }))
      );
    }
  }

  isNewStudent() {
    return !this.props.match.params.id;
  }

  onFieldChange(field, e) {
    const value = e.target.value;
    this.setState(() => ({ [field]: value }));
  }

  onSubmit = (e) => {
    const student = this.state;

    let promise;
    if (this.isNewStudent()) {
      promise = students.create(student);
    } else {
      promise = students.update(student);
    }

    promise.then(() => this.props.history.push('/'));

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
              onChange={(e) => this.onFieldChange('firstName', e)}
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
              onChange={(e) => this.onFieldChange('lastName', e)}
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
              onChange={(e) => this.onFieldChange('group', e)}
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

export default withRouter(StudentsForm);
