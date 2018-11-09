import React, { Component } from 'react';
import './App.css';
import './reset.css'
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
                      <Container>dd </Container>
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

const Container = () =>{
  return(
      <div class="box-episodio hidden-xs">
            <Episodio> </Episodio>
            <div class="lista-servers">
              <div class="content-servers relative item1 1-versao atual esconder">
                <ul>
                  
                </ul>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>
               
                <a class="btn-online" href="http://www.google.com.br/"
                  title="Assista">  <i class="fas fa-play-circle" ></i>
                    Assista Online
                  </a> 
              </div>   
            </div>
      </div> 
  );
}

 const Episodio = () =>{
  return(
    <div class ="nome-thumb">
      <a class="tt" href="/." title=""> Oi, Mundo!</a>
      <a href="http://www.google.com.br/" title="Hello World" class="thumb">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt = "" class="img-full"></img>
        <span class="num-episodio">epi5</span>
      </a>    
    </div>
  );
}


export default App;
