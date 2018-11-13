import React from 'react';
import '../../App.css'
import '../../reset.css'


class Anime extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {anime:{name:'Hello World',descricao:'Google doido', thumb:'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', categoria:'Ação', status:'Em Andamento', episodes:[ 
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif",time:'24:00' },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif",time:'24:00' },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif",time:'24:00' },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif",time:'24:00' },
        {name: "fulmmetal", episode: 6, thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif",time:'24:00' }]
      }}
    }

    renderAnimeEpisodes = () => {
        const list = this.state.anime.episodes;
        
        return list.map( episodes => (
            <nav class='nav-episodios pgn-anime full-hidden'>
                <ul>
                    <li>
                        <a>
                            <span class='thumb'>
                                <img src={episodes.thumb} alt = "" class="img-full"/>
                                <span class='tempo'>{episodes.time}</span>
                            </span>
                            <span class='tt'>Episodio {episodes.episode}</span>
                        </a>
                    </li>
                </ul>
            </nav>
         ));
    }
    
    
    render(){
        return(
            <main id='content-site'>
                <div class='container'>
                    <div class='col-left left'>
                        <div id='galeria-animes' class='pgn-anime'>
                            <div class='box-detalhes-animes pgn-anime'>
                                <header class='top-padrao full-hidden'>
                                    <h2 class='tt-padrao'>{this.state.anime.name}</h2>
                                </header>
                                <div class='content full-hidden'>
                                    <div class='col-thumb'>
                                        <div class='thumb'> 
                                            <img src={this.state.anime.thumb} title={this.state.anime.name} alt={this.state.anime.name} class='img-responsive'/>
                                        </div>
                                    </div>
                                    <div class='col-detalhes'>
                                        <strong>Sinópse e Detalhes</strong>
                                        <p class='descricao'>
                                            {this.state.anime.descricao}
                                        </p>
                                        <table class='info-geral full-hidden'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                       <b>Gêneros:</b> 
                                                    </td>
                                                    <td>{this.state.anime.categoria}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Status:</b>
                                                    </td>
                                                    <td>{this.state.anime.status}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='listagem-episodios'>
                            <header class='top-padrao full-hidden'>
                                <h2 class='tt-padrao left no-float-xs'>Episódios</h2>
                            </header>
                            <div class='lista-episodios-relacionados'>
                                {this.renderAnimeEpisodes()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
      )
    }

}

export default Anime;

