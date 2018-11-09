import React, { Component } from 'react';
import '../../App.css';
import '../../reset.css';
export default class Animes extends Component {    

	constructor(props){
      super(props);
      this.state = {
      	list: [{name: "nanatsu no taizai", episode: 3, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "naruto", episode: 4, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "dragon ball", episode: 5, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },]
      }
      this.renderAnimes = this.renderAnimes.bind(this)
    }

    renderAnimes = () => {
        const list = this.state.list;
        return list.map( anime => (
                <div class="box-episodio hidden-xs">
                    <div class ="nome-thumb">
                        <a class="tt" href={'/' + anime.name} title={anime.name}> {anime.name}</a>
                        <a href={'/' + anime.name} title={anime.name} class="thumb">
                        <img src={anime.thumb} alt = "" class="img-full"/>
                        <span class="num-episodio">epi{anime.episode}</span>
                        </a>    
                    </div>
                    <div class="lista-servers">
                        <div class="content-servers relative item1 1-versao atual esconder">
                        <ul>
                            
                        </ul>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>
                        <a class="btn-online" href={'/' + anime.name + '/' + anime.episode} title="Assista">  <i class="fas fa-play-circle" ></i>
                        Assista Online
                        </a> 
                    </div>   
                    </div>
                </div>
        ));
            
    }

    render() {
	    return(
		        <div>
		            <div id="box-bottom" class="full-hidden">
		                <div class='container'>
		                    <div class='col-left left'>
		                        <div class='info-destaque hidden-xs'>
		                            <div class='content full-hidden'>
		                                <div class="ultimos-episodios hidden-xs">
		                                    {this.renderAnimes()}
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		 )
	}
}
