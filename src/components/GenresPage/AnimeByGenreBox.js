import React from 'react';
import './GenresPage.css'
import {Thumbnail} from 'react-bootstrap';

export default class AnimeByGenreBox extends React.Component {





	render() {
		return (
			<div>
				<Thumbnail src={this.props.thumb} alt="242x220">
				<h3>{this.props.nome}</h3>
				<small>{this.props.episodios} episódios</small>
				</Thumbnail>
			</div>
		)
	}



}