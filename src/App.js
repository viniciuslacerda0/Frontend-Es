import React, { Component } from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import Topo from './components/Template/Topo';
import FrontPage from './components/FrontPage/FrontPage'
import Admin from './components/Admin/Admin';
import Upload from './components/Upload/Upload'
import WatchingPage from './components/WatchingPage/WatchingPage';
import GenresPage from './components/GenresPage/GenresPage'
import Genre from './components/GenresPage/Genre'
import NewAnime from './components/Admin/NewAnime'
import NewEpisodio from './components/Admin/NewEpisodio'
import EditAnime from './components/Admin/EditAnime'

const URL = 'url do api';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {description: '',animes:[]}

    this.refresh();
  }

  refresh(description=''){
    const search = description ? `&description_regex=/${description}/i` : ''
    Axios.get(`${URL}?sort=-createdAt${search}`)
        .then(res => this.setState({...this.state, description, animes:res.data}))
  }

  handleRemove(anime){
    Axios.delete(`${URL}/${anime.name}`)
         .then(resp => this.refresh(this.state.description))
  }

  handleAdd() {
    const description = this.state.description
    Axios.post(URL, { description })
        .then(resp => this.refresh())
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  handleClear(){
    this.refresh()
  }



  render() {
    return(
              <div className="App">
                    <Route exact path='/' component={FrontPage}/>
                    <Route  path='/generos/:id' component={Genre}/>
                    <Route exact path='/generos' component={GenresPage}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path="/admin/adicionar_anime" component={NewAnime}/>
                    <Route exact path="/admin/adicionar_episodios" component={NewEpisodio}/>
                    <Route exact path="/admin/editar_anime" component={EditAnime}/>
                    <Route exact path="/admin/editar_episodios" component={EditAnime}/>
              </div>
            );
  }
}



export default App;
