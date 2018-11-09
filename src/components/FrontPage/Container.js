import React from 'react';
import EpisodioThumb from './EpisodioThumb'

export default class Container extends React.Component {

	render() {

		return(
      <div class="box-episodio hidden-xs">
            <EpisodioThumb> </EpisodioThumb>
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

}