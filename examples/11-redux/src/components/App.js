import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { connect } from 'react-redux';

import { loadStudents } from '../actions/students';
import StudentsIndex from './students/Index';
import StudentsShow from './students/Show';
import StudentsForm from './students/Form';

class App extends Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <Fragment>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">Students</NavbarBrand>
        </Navbar>

        <Container>
          <Switch>
            <Route path="/students/new" component={StudentsForm} />
            <Route path="/students/:id/edit" component={StudentsForm} />
            <Route path="/students/:id" component={StudentsShow} />
            <Route path="/" component={StudentsIndex} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadStudents() {
      dispatch(loadStudents());
    }
  };
};

export default withRouter(connect(
  null, mapDispatchToProps
)(App));
