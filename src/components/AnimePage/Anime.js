import React from 'react';
import '../../App.css'
import '../../reset.css'
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Anime extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: "",
            animeName: "",
            resume: "",
            genre: "",
            thumb: "",
            episodes: []
        }
    }

    componentDidMount() {
        let animeId = this.props.location.state.id;
        Axios.get('http://34.239.129.125/animes/'+ animeId)
        .then(response => {
            this.setState({
                animeName: response.data.content.anime.name,
                id: response.data.content.anime.id,
                genre: response.data.content.anime.genre,
                resume: response.data.content.anime.resume,
                thumb: response.data.content.anime.thumb_url
            })
        })

        Axios.get('http://34.239.129.125/animes/'+ animeId  + '/episodes')
        .then(response => {
            this.setState({episodes: response.data.content.episodes})
        })
        .then(res=>console.log(this.state.episodes))
    }

    renderAnimeEpisodes = () => {
        const list = this.state.episodes;
        
        return list.map( episodes => (
            <Link   className="genreBox" 
                    to={{ 
                        pathname: `/video/${episodes.id}`,
                        state: { url: episodes.video_url, animeName: this.state.animeName, epName: episodes.name}
            }}> 
                <nav class='nav-episodios pgn-anime full-hidden'>
                    <ul>
                        <li>
                            <a>
                                <span class='tt'>{episodes.name}</span>
                                {console.log(this.props.location.state.id)}
                            </a>
                        </li>
                    </ul>
                </nav>
            </Link>
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
                                    <h2 class='tt-padrao'>{this.state.animeName}</h2>
                                </header>
                                <div class='content full-hidden'>
                                    <div class='col-thumb'>
                                        <div class='thumb'> 
                                            <img src={this.state.thumb} title={this.state.animeName} alt={this.state.animeName} class='img-responsive'/>
                                        </div>
                                    </div>
                                    <div class='col-detalhes'>
                                        <strong>Sinópse e Detalhes</strong>
                                        <p class='descricao'>
                                            {this.state.resume}
                                        </p>
                                        <table class='info-geral full-hidden'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                       <b>Gêneros:</b> 
                                                    </td>
                                                    <td>{this.state.genre}</td>
                                                </tr>
                                                <tr>
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

