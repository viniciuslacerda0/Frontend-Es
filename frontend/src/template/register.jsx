import React, {Component} from 'react'

export default class Register extends Component{
    constructor(props){
        super(props)

        this.state = {username: '', password: '', confirmPassword: '', email: ''}

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)

    }

    handleChangeUsername(e){
        this.setState({...this.state, username: e.target.value})
    }

    handleChangePassword(e){
        this.setState({...this.state, password: e.target.value})
    }

    handleChangeEmail(e){
        this.setState({...this.state, email: e.target.value})
    }

    handleChangeConfirmPassword(e){
        this.setState({...this.state, confirmPassword: e.target.value})
    }

    render(){
        return(
                <div className='login'>
                    <h4> Nome do usuário </h4>
                    <input id='username'
                        value={this.state.username}
                        type='text'
                        onChange={(event) => this.handleChangeUsername(event)}
                    />
                    <br/><br/>
                    <h4> Escolha senha </h4>
                    <input id='password'
                        type='password'
                        value={this.state.password}
                        onChange={(event) => this.handleChangePassword(event)}
                    />                    
                    <br/><br/>
                    <h4> Confirme a senha </h4>
                    <input id='password'
                        type='password'
                        value={this.state.confirmPassword}
                        onChange={(event) => this.handleChangeConfirmPassword(event)}
                    />
                    <br/><br/>
                    <h4> Endereço de email </h4>
                    <input id='password'
                        type='text'
                        value={this.state.email}
                        onChange={(event) => this.handleChangeEmail(event)}
                    />
                    <br/><br/>
                    <button className='btn btn-primary'>
                        Registrar
                        <i className='fa fa-check' style={{marginLeft: 12}}></i>
                    </button>
                </div>
        )
    }

}