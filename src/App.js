import React, { Component } from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import Topo from './components/Template/Topo';
import FrontPage from './components/FrontPage/FrontPage'
import Admin from './components/Admin/Admin';
import WatchingPage from './components/WatchingPage/WatchingPage';
import GenresPage from './components/GenresPage/GenresPage'
import Genre from './components/GenresPage/Genre'
import NewAnime from './components/Admin/NewAnime'
import NewEpisode from './components/Admin/NewEpisode'
import EditAnime from './components/Admin/EditAnime'
import AnimeList from './components/AnimePage/AnimeList'
import Contact from './components/Contact/Contact'
import Anime from'./components/AnimePage/Anime';
import EditEpisodes from './components/Admin/EditEpisodes'
import DeleteAnimeEpisodes from './components/Admin/DeleteAnimeEpisodes'
// import SearchAnimes from './components/Template/searchAnimes'

const URL = 'http://34.239.129.125/';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {description: '',animes:[], role: sessionStorage.getItem('role')}

    // this.refresh();
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
                    <Topo/>
                    <Route exact path='' component={FrontPage}/>
                    <Route  path='/generos/:id' component={Genre}/>
                    <Route exact path='/generos' component={GenresPage}/>
                    <Route exact path='/anime' component={AnimeList}/>
                    {this.state.role === 'Admin' &&
                      <Route exact path='/admin' component={Admin}/>
                    }
                    <Route exact path='/contato' component={Contact}/>
                  {/*  <Route exact path='/pesquisado' component={SearchAnimes}/> */}
                    <Route exact path="/anime/:animeID/video/:id" component={WatchingPage}/>
                    <Route exact path="/anime/:id" component={Anime}/>
                    {this.state.role === 'Admin' &&
                      <Route exact path="/admin/adicionar_anime" component={NewAnime}/>

                    }
                    {this.state.role === 'Admin' &&
                      <Route exact path="/admin/adicionar_episodios" component={NewEpisode}/>
                    }
                    {this.state.role === 'Admin' &&
                      <Route exact path="/admin/editar_anime" component={EditAnime}/>
                    }
                    {this.state.role === 'Admin' &&
                      <Route exact path="/admin/editar_episodios" component={EditEpisodes}/>
                    }
                    {this.state.role === 'Admin' &&
                      <Route exact path="/admin/editar_episodios/:id" component={DeleteAnimeEpisodes}/>
                    }
              </div>
            );
  }
}



export default App;
