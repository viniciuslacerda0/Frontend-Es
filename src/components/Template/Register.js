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
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeGender = this.handleChangeGender.bind(this)

    }

    handleSubmit(e){
      var data = {}
      data.name = this.state.username;
      data.email = this.state.email;
      data.gender = this.state.gender;
      data.birth = this.state.date;
      data.password = this.state.password;
      data.checkedPassword = this.state.confirmPassword;
      Axios.post('http://ec2-54-91-147-129.compute-1.amazonaws.com/signup/social', data).then(() => console.log("sucesso")).catch("error")

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

    handleChangeGender(e){
      this.setState({gender: e.target.value})
    }

    handleChangeDate(e){
      console.log(e.target.value)
      this.setState({date: e.target.value})
    }

    render(){
        return(
                <div className='login'>
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
                  <ControlLabel> Data de nascimento </ControlLabel>
                  <FormControl className="center" type="date" value={this.state.date} onChange={this.handleChangeDate}/>
                  <ControlLabel> Genero </ControlLabel>
                  <Radio name="radioGroup" defaultChecked value={"MALE"} onChange={this.handleChangeGender}> Masculino </Radio>
                  <Radio name="radioGroup" value={"FEMALE"} onChange={this.handleChangeGender}> Feminino </Radio>
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