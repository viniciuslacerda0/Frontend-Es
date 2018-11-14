import React, { Component } from 'react';
import Axios from 'axios';
import FrontPage from './components/FrontPage/FrontPage'
import Manage from './components/Manage/Manage';
import Upload from './components/Upload/Upload'
import WatchingPage from './components/WatchingPage/WatchingPage';
import GenresPage from './components/GenresPage/GenresPage'

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
                    <GenresPage/>
              </div>
            );
  }
}



export default App;
