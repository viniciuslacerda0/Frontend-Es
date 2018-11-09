import React from 'react';

export default class EpisodioThumb extends React.Component {

	render() {

		return(
		    <div class ="nome-thumb">
		      <a class="tt" href="/." title=""> Oi, Mundo!</a>
		      <a href="http://www.google.com.br/" title="Hello World" class="thumb">
		        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt = "" class="img-full"></img>
		        <span class="num-episodio">epi5</span>
		      </a>    
		    </div>
		  );
	}

}