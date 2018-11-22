import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import Axios from 'axios';
import './custom.css'
import '../Styles/styles.css'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {username: '', password: ''}

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(e){
        this.setState({username: e.target.value})
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    handleSubmit(e){
      var data = {
      'email': "admin@admin.com",
      'password': "admin"
      }
      Axios.post('http://34.239.129.125/login/social', data, {
        header: {"Content-Type": "application/json"}
      })
      .then(response => {
        const token = response.data.content.token;
        const role = response.data.content.role;
        console.log(response.data)
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", role);
        document.location.reload (true);
      })

      e.preventDefault();
    }

    render(){
        return(
                <div className='login'>
                  <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <ControlLabel> Usuário </ControlLabel>
                    <FormControl className="center" type="email" value={this.state.username} onChange={this.handleChangeUsername}/>
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
