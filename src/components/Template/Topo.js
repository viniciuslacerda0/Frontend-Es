import React, {Component} from 'react'
import Login from './Login'
import Register from './Register'
import './custom.css'

export default class Topo extends Component {

    constructor(props){
        super(props)
        this.state ={
            showLogin: false,
            showRegister: false,
            isLogged: sessionStorage.getItem('token'),
            role: sessionStorage.getItem('role')
        }
    }
    showLogin(){
        this.setState({
            showLogin: !this.state.showLogin,
            showRegister: false
        })
    }
    showRegister(){
        this.setState({
            showRegister: !this.state.showRegister,
            showLogin: false
        })
    }

    logOut() {
        sessionStorage.clear();
        document.location.reload(true);
        }

    render(){
        return(
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                <div className='navbar-inner'>
                    <div className='container'>
                        <div className='navbar-collapse collapse'>
                            <ul className="nav navbar-nav">
                                <li><a href="/">HOME</a></li>
                                <li><a href="/animes">ANIMES</a></li>
                                <li><a href="/generos">GÊNEROS</a></li>
                                <li><a href="/contato">CONTATO</a></li>
                                {this.state.role === "Admin" ? <li><a href="/admin" style={{color: "white", cursor: "pointer"}}>UPLOAD</a></li> : null}
                                {!this.state.isLogged ? <li><a style={{color: "white", cursor: "pointer"}} onClick={() => this.showLogin()}>LOGIN</a></li> : null}
                                {!this.state.isLogged ? <li><a style={{color: "white", cursor: "pointer"}} onClick={() => this.showRegister()}>CADASTRO</a></li> : null}
                                <li><input className="form-control input-md" placeholder="Pesquisar" type='text'/></li>
                                <li><button type='submit' className='buttonMenu btn btn-info'>
                                        <i className='fa fa-search'></i>
                                    </button></li>
                                {this.state.isLogged ? (<li><a style={{color: "white", cursor: "pointer"}} onClick={() => this.logOut()}>SAIR</a></li>) : null}
                            </ul>
                        </div>
                    </div>
                    <div>
                        {this.state.showLogin ? <Login /> : null}
                        {this.state.showRegister ? <Register /> : null}

                    </div>
                </div>
            </nav>
        )
    }

}
