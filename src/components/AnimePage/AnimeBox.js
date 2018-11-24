import React from 'react';

import {Thumbnail} from 'react-bootstrap';

export default class AnimeByGenreBox extends React.Component {

	render() {
		return (
			<div>
				<Thumbnail src={this.props.thumb} >
				{this.props.name}
				</Thumbnail>
			</div>
		)
	}



}