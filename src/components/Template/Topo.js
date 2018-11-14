import React, {Component} from 'react'
import Login from './Login'
import Register from './Register'
import './custom.css'

export default class Topo extends Component {

    constructor(props){
        super(props)
        this.state ={
            showLogin: false,
            showRegister: false
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

    render(){
        return(
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                <div className='navbar-inner'>
                    <div className='container'>
                        <div className='navbar-collapse collapse'>
                            <ul className="nav navbar-nav">
                                <li><a href="#">ANIMES</a></li>
                                <li><a href="#">CATEGORIAS</a></li>
                                <li><a href="#">DUBLADOS</a></li>
                                <li><a href="#">LEGENDADOS</a></li>
                                <li><a href="#">CONTATO</a></li>
                                <li><input className="form-control input-md" placeholder="Pesquisar" type='text'/></li>
                                <li><button type='submit' className='buttonMenu btn btn-info'>
                                        <i className='fa fa-search'></i>
                                    </button></li>
                                <li><a onClick={() => this.showLogin()}>LOGIN</a></li>
                                <li><a onClick={() => this.showRegister()}>CADASTRO</a></li>
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