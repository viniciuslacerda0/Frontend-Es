import React, { Component } from 'react';
import './App.css';
import './reset.css';

export default props => {    

    const renderAnimes = () => {
        const list = props.list || []
        return list.map( anime => (
                <div className="box-episodio hidden-xs">
                    <div className ="nome-thumb">
                        <a className="tt" href={'/' + anime.name} title={anime.name}> {anime.name}</a>
                        <a href={'/' + anime.name} title={anime.name} className="thumb">
                        <img src={'/' + anime.thumb} alt = "" className="img-full"/>
                        <span className="num-episodio">epi{anime.episode}</span>
                        </a>    
                    </div>
                    <div className="lista-servers">
                        <div className="content-servers relative item1 1-versao atual esconder">
                        <ul>
                            
                        </ul>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>
                        <a className="btn-online" href={'/' + anime.name + '/' + anime.episode} title="Assista">  <i class="fas fa-play-circle" ></i>
                        Assista Online
                        </a> 
                    </div>   
                    </div>
                </div>
        ));
            
    }

    return(
            <div id="box-bottom" className="full-hidden">
                <div className='container'>
                    <div className='col-left left'>
                        <div className='info-destaque hidden-xs'>
                            <div className='content full-hidden'>
                                <div className="ultimos-episodios hidden-xs">
                                    {renderAnimes()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
