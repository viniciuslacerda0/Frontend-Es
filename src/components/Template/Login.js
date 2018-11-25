import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import Axios from 'axios';
import './custom.css'
import '../Styles/styles.css'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {email: '', password: ''}

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e){
        this.setState({email: e.target.value})
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    handleSubmit(e){
      var data = {}
      data.email = this.state.email;
      data.password = this.state.password;
      Axios.post('http://34.239.129.125/login/social', data, {
        header: {"Content-Type": "application/json"}
      })
      .then(response => {
        const token = response.data.content.token;
        const role = response.data.content.user.role;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", role);
        document.location.reload (true);
      }).catch(() => alert("error"))

      e.preventDefault();
    }

    render(){
        return(
                <div className='animated bounceInDown login'>
                  <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <ControlLabel> Email </ControlLabel>
                    <FormControl className="center" type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                    <ControlLabel> Senha </ControlLabel>
                    <FormControl className="center" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    <br/>
                  <Button type="submit" className='btn btn-primary'>
                      Entrar
                      <i className='fa fa-check' style={{marginLeft: 12}}></i>
                  </Button>
                  </FormGroup>
                </form>
                </div>
        )
    }

}
