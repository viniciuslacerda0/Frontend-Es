import React from 'react';
import {Link} from 'react-router-dom';
import {Thumbnail} from 'react-bootstrap';
import "../Template/custom.css";

export default class AnimeByGenreBox extends React.Component {

	render() {
		return (
			<Link to={{pathname: `/anime/${this.props.id}`,
					  state: {id:this.props.id}
			}}>
			<div>
				<Thumbnail  className="animeCol" src={this.props.thumb} alt="200x200">
				{this.props.name}
				</Thumbnail>
			</div>
			</Link>
		)
	}



}
