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
      var data = {}
      data.email = this.state.username;
      data.password = this.state.password;
      Axios.post('http://ec2-54-91-147-129.compute-1.amazonaws.com/login/social', data).then(() => console.log("Logado com sucesso")).catch(() => alert("error"))
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
