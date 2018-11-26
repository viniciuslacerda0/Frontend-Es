import React from 'react';
import './GenresPage.css'
import {Thumbnail} from 'react-bootstrap';
import Axios from 'axios'

export default class AnimeByGenreBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			episodes: 0
		}
		Axios.get('http://34.239.129.125/animes/'+this.props.id+'/episodes').then(res => this.setState({episodes: res.data.content.episodes.length}))
	}

	render() {
		return (
			<div>
				<Thumbnail >
				<img className="animeBoxImg" src={this.props.thumb} />
				<h3>{this.props.nome}</h3>
				<small>{this.state.episodes} episódios</small>
				</Thumbnail>
			</div>
		)
	}



}
