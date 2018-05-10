import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

import * as students from '../../api/students';

class StudentsShow extends Component {
  constructor() {
    super();

    this.state = { student: {} };
  }

  componentDidMount() {
    students.show(this.props.match.params.id).then((student) =>
      this.setState(() => ({ student }))
    );
  }

  onEdit = () => {
    this.props.history.push(`/students/${this.props.match.params.id}/edit`);
  }

  onDestroy = () => {
    students.destroy(this.props.match.params.id).then(() =>
      this.props.history.push('/')
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.student.lastName} {this.state.student.firstName}</h1>

        <dl>
          <dt>Group:</dt><dd>{this.state.student.group}</dd>
        </dl>

        <ButtonGroup>
          <Button color="primary" onClick={this.onEdit}>Edit</Button>
          <Button color="danger" onClick={this.onDestroy}>Destroy</Button>
        </ButtonGroup>

        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(StudentsShow);
