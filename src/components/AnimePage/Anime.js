import React from 'react';
import '../../App.css'
import '../../reset.css'
import PageHeader from '../Template/PageHeader';
import {Grid, Col, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import RatingBar from './RatingBar'
import './animePage.css'

class Anime extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLogged: sessionStorage.getItem('token'),
            id: this.props.match.url.substring(7,this.props.match.url.length),
            animeName: "",
            resume: "",
            genre: "",
            thumb: "",
            episodes: []
        }
    }

    componentDidMount() {
        let animeId = this.props.match.url.substring(7,this.props.match.url.length);
        Axios.get('http://34.239.129.125/animes/'+ animeId)
        .then(response => {
            this.setState({
                animeName: response.data.content.anime.name,
                id: animeId,
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

            <div className='nav-episodios pgn-anime full-hidden'>
                <Link   className="genreBox"
                to={{
                    pathname: `/video/${episodes.id}`,
                    state: { url: episodes.video_url, animeName: this.state.animeName, epName: episodes.name, animeID: this.aniemID}
                }}>
                  <span className=''><Glyphicon glyph="play-circle"/> Episódio {episodes.chapter}</span>
                </Link>
            </div>
         ));
    }


    render(){
        return(
            <main id='content-site'>
                <Grid className=''>
                    <Col md={9}>

                                <header className='headerAnime'>
                                    <h2 className=''>{this.state.animeName} {this.state.isLogged ? <RatingBar animeID={this.state.id}/> : null} </h2>
                                </header>

                                <div className='conteudo '>
                                    <Col md={4}>
                                        <div className=''>
                                            <img src={this.state.thumb} title={this.state.animeName} alt={this.state.animeName} className='img-responsive'/>
                                        </div>
                                    </Col>
                                        <strong>Sinópse e Detalhes:</strong>
                                        <p>
                                            {this.state.resume}
                                        </p>
                                        <strong>Gênero:</strong> {this.state.genre}
                                        <p>
                                        </p>
                                </div>

                                <header className='headerAnime'>
                                    <h2 className=''>Episódios</h2>
                                </header>

                                <div className='conteudoEp'>
                                        {this.renderAnimeEpisodes()}
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



                        // <div className='listagem-episodios'>
                        //     <header className='top-padrao full-hidden'>
                        //         <h2 className='tt-padrao left no-float-xs'>Episódios</h2>
                        //     </header>
                        //     <div className='lista-episodios-relacionados'>
                        //         {this.renderAnimeEpisodes()}
                        //     </div>
                        // </div>
