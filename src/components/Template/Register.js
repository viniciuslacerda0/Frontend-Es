import React, {Component} from 'react'
import Axios from 'axios'
import {Button, FormGroup, ControlLabel, FormControl, Radio} from 'react-bootstrap'

export default class Register extends Component{
    constructor(props){
        super(props)

        this.state = {username: '', password: '', confirmPassword: '', email: '', date: '', gender: 'MALE'}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)

    }

    handleSubmit(e){
      var data = new FormData();
      data.set('name', "ramon");
      data.set('email', "ramon@gmail.com");
      data.set('password', "ramonramon");
      data.set('checkedPassword', "ramonramon");
      Axios.post('http://34.239.129.125/signup/social', data, {
          header: {
              'Content-Type': 'application/json'
          }
      }).then(res => console.log(res))

      e.preventDefault();

    }

    handleChangeUsername(e){
        this.setState({username: e.target.value})
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    handleChangeEmail(e){
        this.setState({email: e.target.value})
    }

    handleChangeConfirmPassword(e){
        this.setState({confirmPassword: e.target.value})
    }

    render(){
        return(
                <div className='animated bounceInDown login'>
                  <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                  <ControlLabel> Nome do usuário </ControlLabel>
                  <FormControl className="center" type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
                  <ControlLabel> Escolha a senha </ControlLabel>
                  <FormControl className="center" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                  <ControlLabel> Confirme a senha </ControlLabel>
                  <FormControl className="center" type="password" value={this.state.confirmPasswordpassword} onChange={this.handleChangeConfirmPassword}/>
                  <ControlLabel> Email </ControlLabel>
                  <FormControl className="center" type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                  <br />
                    <Button onClick={this.handleSubmit} className='btn btn-primary'>
                        Registrar
                        <i className='fa fa-check' style={{marginLeft: 12}}></i>
                    </Button>
                    </FormGroup>
                  </form>
                </div>
        )
    }

}
