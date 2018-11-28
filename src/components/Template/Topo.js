import React, {Component} from 'react'
import Axios from 'axios'
import Login from './Login'
import Register from './Register'
import {Thumbnail} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './custom.css'
import '../Styles/styles.css'



export default class Topo extends Component {

    constructor(props){
        super(props)
        this.state ={
            showLogin: false,
            showRegister: false,
            isLogged: sessionStorage.getItem('token'),
            role: sessionStorage.getItem('role'),
            searchResults: null,
            enableForm: false,
            searchName: "",
            animeName: "",
            animeId: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.search = this.search.bind(this);
    }

    search(){
        // Axios.get("http://34.239.129.125/animes?search=" + this.state.searchName)
        // .then(response => this.setState({searchResults:response.data.content.animes}))
    }

    openForm(e) {
        this.setState({enableForm:true})
        this.setState({animeId:e.id})
        this.setState({animeName:e.name})
    }

    closeForm(){
        this.setState({enableForm:true})
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

    handleChangeName(event){
        // this.setState({searchName: event.target.value})
    }

    render(){
        return(
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                <div className='navbar-inner'>
                    <div className='container'>
                        <div className='navbar-collapse collapse'>
                            <ul className="nav navbar-nav">
                                <li><Link
                                      to={{
                                        pathname:`/`,
                                      }}>HOME</Link></li>
                                <li><Link
                                      to={{
                                        pathname:`/anime`,
                                      }}>ANIMES</Link></li>
                                <li><Link
                                      to={{
                                        pathname:`/generos`,
                                      }}>GÊNEROS</Link></li>
                                <li><Link
                                      to={{
                                        pathname:`/contato`,
                                      }}>CONTATO</Link></li>

                                {!this.state.isLogged ? <li style={{color: "white", cursor: "pointer",  "marginLeft":"16px", "marginRight":"16px", "marginTop":"8px"}} onClick={() => this.showLogin()}> LOGIN </li> : null}
                                {!this.state.isLogged ? <li><p style={{color: "white", cursor: "pointer", "marginRight":"10px", "marginTop":"8px"}} onClick={() => this.showRegister()}> CADASTRO </p></li> : null}
                                {this.state.role === "Admin" ? <li><Link
                                      to={{
                                        pathname:`/admin`,
                                      }}><p style={{color: "white", cursor: "pointer"}}>UPLOAD</p></Link></li> : null}
                                <li><input className="form-control input-md" placeholder="Pesquisar" onChange={this.handleChangeName} type='text'/></li>
                                <li><button type='submit' className='buttonMenu btn btn-info' onClick={this.search}>
                                        <i className='fa fa-search'></i>
                                    </button></li>
                                {(this.state.searchResults != null && !this.state.enableForm) ? (<table style={{}}><td>{this.state.searchResults.map(a =><Link to={{pathname: `/anime/${a.name}`,
					  state: {id:a.id}

			}}><tr><Thumbnail onClick={() => this.closeForm()} src={a.thumb}>{a.name}</Thumbnail></tr></Link>)}</td></table> ) : null}

                                {this.state.isLogged ? (<li><a style={{color: "white", cursor: "pointer"}} onClick={() => this.logOut()}>SAIR</a></li>) : null}
                            </ul>
                        </div>
                    </div>
                    <div>
                        {this.state.showLogin ? <Login/>: null}
                        {this.state.showRegister ? <Register /> : null}

                    </div>
                </div>
            </nav>
        )
    }

}
