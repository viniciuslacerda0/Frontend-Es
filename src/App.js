import React, { Component } from 'react';
import './App.css';
import './reset.css'
import EpisodioThumb from './components/FrontPage/EpisodioThumb';
import Container from './components/FrontPage/Container';
import Axios from 'axios';


const URL = 'url do api';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {description: '',list:[]}

    this.refresh();
  }

  refresh(description=''){
    const search = description ? `&description_regex=/${description}/i` : ''
    Axios.get(`${URL}?sort=-createdAt${search}`)
        .then(res => this.setState({...this.state, description, list:res.data}))
  }




  render() {
    return (
      <div className="App">
        <body>
          <div id="box-bottom" class="full-hidden">
            <div class='container'>
              <div class='col-left left'>
                <div class='info-destaque hidden-xs'>
                  <div class='content full-hidden'>
                    <div class="ultimos-episodios hidden-xs">
                      <Container></Container>
                      <Container></Container>
                      <Container></Container>
                      <Container></Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}


export default App;
