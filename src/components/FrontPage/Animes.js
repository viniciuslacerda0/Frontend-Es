import React, { Component } from 'react';
import '../../reset.css';
export default class Animes extends Component {    

	constructor(props){
      super(props);
      this.renderAnimes = this.renderAnimes.bind(this)
    }

    renderAnimes = () => {
        const list = this.props.list;
        return list.map( anime => (
                <div className="box-episodio hidden-xs">
                    <div className ="nome-thumb">
                        <a className="tt" href={'/' + anime.name} title={anime.name}> {anime.name}</a>
                        <a href={'/' + anime.name} title={anime.name} className="thumb">
                        <img src={anime.thumb_url} alt = "" className="img-full"/>
                        <span className="num-episodio">epi{anime.episode}</span>
                        </a>    
                    </div>
                    <div className="lista-servers hvr-bob">
                        <div className="content-servers relative item1 1-versao atual esconder">
                        <ul>
                            
                        </ul>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossOrigin="anonymous"/>
                        <a className="btn-online" href={'/' + anime.name + '/' + anime.episode} title="Assista">  
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
