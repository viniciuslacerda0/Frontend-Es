import React, {Component} from 'react'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {username: '', password: ''}

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

    }

    handleChangeUsername(e){
        this.setState({...this.state, username: e.target.value})
    }

    handleChangePassword(e){
        this.setState({...this.state, password: e.target.value})
    }

    render(){
        return(
                <div className='login'>
                    <h4> Login </h4>
                    <input id='username'
                        value={this.state.username}
                        type='text'
                        onChange={(event) => this.handleChangeUsername(event)}
                    />
                    <br/><br/>
                    <h4> Senha</h4>
                    <input id='password'
                        type='password'
                        value={this.state.password}
                        onChange={(event) => this.handleChangePassword(event)}
                    />
                    <br/><br/>
                    <a href="#">Esqueceu a senha?</a>
                    <br/><br/>
                    <button className='btn btn-primary'>
                        Entrar
                        <i className='fa fa-check' style={{marginLeft: 12}}></i>
                    </button>
                </div>
        )
    }

}