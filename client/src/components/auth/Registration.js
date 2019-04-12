import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  NavLink,
  Label,
  Input
} from 'reactstrap';

import Axios from 'axios'

class Registration extends Component {
    state = {
      modal: false,
      name: '',
      email: '',
      password: '',
      msg: null
    };

    componentDidMount() {

      let token = localStorage.getItem('authToken');
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log(`authtoken ${token}`);

      Axios.post('localhost:5000/api/users')
      .then(response => {
      })
      .catch(function(err) {
          console.log(err)
      });
}

    toggle = () => {
      this.setState({
      modal: !this.state.modal
      });
    };


  onChangeName = (e) => this.setState({
       name: e.target.value
  });

  onChangeEmail = (e) => this.setState({
      email: e.target.value
  });

 onChangePassword = (e) => this.setState({
       password: e.target.value
  });




    onSubmit(e) {
      e.preventDefault();
      const { name,email,password } = this.state;
      const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
      };


      Axios.post('localhost:5000/api/users', newUser)
      .then( console.log("Register Sucess"));
      this.setState({
         username: '',
         name: '',
         email: '',
         password: ''
     })
      .catch( console.log("Register Fail"))
}

  render(){
    return(
        <div>
        <NavLink onClick = { this.toggle } href = "#">
            Register
        </NavLink>

        <Modal isOpen = { this.state.modal} toggle = {this.toggle}>
        <ModalHeader toggle = {this.toggle}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit = {this.onSubmit}>
          <FormGroup>
            <Label for= "name">Name</Label>
            <Input
              type = 'text'
              name= 'name'
              id= 'name'
              placeholder= 'Name'
              onChange={this.onChange}
              />

            <Label for= "email">Email</Label>
            <Input
              type = "email"
              name= "email"
              id= "email"
              placeholder= "Email"
              onChange={this.onChange}
              />

            <Label for= "password">Password</Label>
            <Input
              type = "password"
              name= "password"
              id= "password"
              placeholder= "Password"
              onChange={this.onChange}
              />

              <Button color = 'dark' style = {{ marginTop: '2rem'}} block>
              Register
              </Button>

          </FormGroup>
          </Form>
        </ModalBody>
        </Modal>
        </div>
    );
  }
}

export default Registration;
