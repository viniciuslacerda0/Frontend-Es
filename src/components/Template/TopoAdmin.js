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


    render(){
        return(
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                <div className='navbar-inner'>
                    <div className='container'>
                        <div className='navbar-collapse collapse'>
                            <ul className="nav navbar-nav">
                                <li><a href="/">HOME</a></li>
                                <li><a href="/showanimes">ANIMES</a></li>
                                <li><a href="/generos">GÊNEROS</a></li>
                                <li><a href="/contato">CONTATO</a></li>
                                <li><a href="/admin" style={{color: "white", cursor: "pointer"}}>UPLOAD</a></li>
                                <li><input className="form-control input-md" placeholder="Pesquisar" type='text'/></li>
                                <li><button type='submit' className='buttonMenu btn btn-info'>
                                        <i className='fa fa-search'></i>
                                    </button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}
