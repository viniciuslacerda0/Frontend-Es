import React from 'react';
import '../../App.css'
import '../../reset.css'
import Axios from 'axios'

class ShowAnimes extends React.Component{

  constructor(props){
    super(props)
    this.state = {list:[]}
    this.renderAllAnimes = this.renderAllAnimes.bind(this);
    Axios.get('http://34.239.129.125/animes').then(response => response.data.content.animes).then(res => this.setState({list: res}));

  }

  renderAllAnimes = () => {
    const list = this.state.list
    return list.map( anime =>
       <div class='box-detalhes-animes'>
             <header class='top-padrao full-hidden'>
              <h2 class='tt-padrao'>
                <a href={'/' + anime.name}>{anime.name}</a>
              </h2>
            </header>
            <div class='content full-hidden'>
              <div class='content full-hidden'>
                <div class='col-thumb'>
                  <a href={'/' + anime.name} title={anime.name} class="thumb">
                        <img src={anime.thumb.url} target='_blank' alt = {anime.name + ' Online'} class="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
           </div>
    )
  }

  render() {
    return(
      <div>
        <div class='container'>
          <div class='galeria-animes'>
            {this.renderAllAnimes()}
          </div>
        </div>

      </div>

    )
  }
}

export default ShowAnimes;
