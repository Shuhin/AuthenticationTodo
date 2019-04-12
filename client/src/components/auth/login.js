import React, {
  Component
} from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  NavLink,
  Label,
  Input,
  Alert
} from 'reactstrap';

import Axios from 'axios'


class login extends Component {

  state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  };

  onChangeEmail = (e) => this.setState({
    email: e.target.value
  });

  onChangePassword = (e) => this.setState({
    password: e.target.value
  });


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit(e) {
    e.preventDefault();
    Axios.post('localhost:5000/api/users/authenticate', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.id_token);
        console.log("Login Success");
        localStorage.setItem('authToken', res.data.id_token);
      })
      .catch((error) => {
        console.log("Login Fail");
        Alert(error.message);
      });
  }


  render(){
    return(
        <div>
        <NavLink onClick = { this.toggle } href = "#">
            Login
        </NavLink>

        <Modal isOpen = { this.state.modal} toggle = {this.toggle}>
        <ModalHeader toggle = {this.toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>

            <Label for= "email">Email</Label>
            <Input
              type = "email"
              name= "email"
              id= "email"
              placeholder= "Email"
              onChange={this.onChangeEmail}
              />

            <Label for= "password">Password</Label>
            <Input
              type = "password"
              name= "password"
              id= "password"
              placeholder= "Password"
              onChange={this.onChangePassword}
              />

          <Button color = 'dark' style = {{ marginTop: '2rem'}} block>
          Login
          </Button>

          </FormGroup>
          </Form>
        </ModalBody>
        </Modal>
        </div>
    );
  }
}



export default login;
