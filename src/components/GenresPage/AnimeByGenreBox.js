import React from 'react';
import './GenresPage.css'
import {Thumbnail} from 'react-bootstrap';

export default class AnimeByGenreBox extends React.Component {





	render() {
		return (
			<div>
				<Thumbnail >
				<img className="animeBoxImg" src={this.props.thumb} />
				<h3>{this.props.nome}</h3>
				<small>{this.props.episodios} episódios</small>
				</Thumbnail>
			</div>
		)
	}



}