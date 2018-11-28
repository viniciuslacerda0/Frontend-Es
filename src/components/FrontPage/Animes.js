import React, { Component } from 'react';
import '../../reset.css';
import {Link} from 'react-router-dom';
export default class Animes extends Component {

	constructor(props){
      super(props);
      this.renderAnimes = this.renderAnimes.bind(this)
    }

    renderAnimes = () => {
        const list = this.props.list;
        return list.map( anime => (
            <Link
                to={{
                    pathname:`/anime/${anime.id}`,
                    state: {id:anime.id}
                }}
            >
                <div className="box-episodio hidden-xs">
                    <div className ="nome-thumb">
                        <p className="tt" href={'/' + anime.id} title={anime.name}> {anime.name}</p>
                        <p href={'/' + anime.id} title={anime.name} className="thumb">
                        <img src={anime.thumb_url} alt = "Foto do anime" className="img-full"/>
                        </p>
                    </div>
                    <div className="lista-servers hvr-bob">
                        <div className="content-servers relative item1 1-versao atual esconder">
                        <ul>

                        </ul>
                        <p className="btn-online" href={'/' + anime.id} title="Assista">
                        Assista Online
                        </p>
                    </div>
                    </div>
                </div>
            </Link>
        ));

    }

    render() {
	    return(
		        <div>
		            <div id="box-bottom" className="full-hidden">
		                <div className='container'>
		                    <div className='col-left left'>
		                        <div className='info-destaque hidden-xs'>
		                            <div className='content full-hidden'>
		                                <div className="ultimos-episodios hidden-xs">
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
