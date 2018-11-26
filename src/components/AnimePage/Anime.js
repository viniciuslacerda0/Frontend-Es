import React from 'react';
import '../../App.css'
import '../../reset.css'
import PageHeader from '../Template/PageHeader';
import {Grid, Col, Glyphicon} from 'react-bootstrap'
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
        .catch(() => alert("error"))
    }

    renderAnimeEpisodes = () => {
        const list = this.state.episodes;

        return list.map( episodes => (

            <nav class='nav-episodios pgn-anime full-hidden'>
                <Link   className="genreBox"
                to={{
                    pathname: `/video/${episodes.id}`,
                    state: { url: episodes.video_url, animeName: this.state.animeName, epName: episodes.name}
                }}>
                  <span class=''><Glyphicon glyph="play-circle"/> Episódio {episodes.chapter}</span>
                </Link>
            </nav>
         ));
    }


    render(){
        return(
            <main id='content-site'>
                <Grid class='container'>
                    <Col md={9}>

                        <div id='galeria-animes' class='pgn-anime'>
                            <div class='box-detalhes-animes pgn-anime'>
                                <header class='top-padrao full-hidden'>
                                    <h2 class='tt-padrao'>{this.state.animeName}</h2>
                                </header>
                                <div class='content full-hidden'>
                                    <Col md={9}>
                                        <div class='thumb'>
                                            <img src={this.state.thumb} title={this.state.animeName} alt={this.state.animeName} class='img-responsive'/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <strong>Sinópse e Detalhes</strong>
                                        <p>
                                            {this.state.resume}
                                        </p>
                                        <strong>Gênero:</strong>
                                        <p>
                                            {this.state.genre}
                                        </p>
                                    </Col>
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

                    </Col>
                    <Col md={3}>
                        <PageHeader small="Parceiros"/>
                    </Col>
                </Grid>
            </main>
      )
    }

}

export default Anime;
