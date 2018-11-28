import React from 'react';
import './WatchingPage.css';
import {Col, ButtonGroup, Button} from 'react-bootstrap';
import RatingBar from './RatingBar';

export default class OptionsBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLogged: sessionStorage.getItem('token'),

		}


	}
	render() {
		return(
			<div>
				<Col md={4}><h2 style={{"textAlign":"left"}}>Episódio {this.props.episodio} - <small>{this.props.anime}</small></h2></Col>
				<Col md={8} style={{"textAlign":"right", "marginTop":20}}>
					{this.state.isLogged ? <RatingBar animeID={this.props.animeID} episodeID={this.props.episodeID}/> : null}
					<ButtonGroup>
						<Button><i className="fas fa-arrow-left"></i> Episódio Anterior</Button>
						<Button>Próximo Episódio <i class="fas fa-arrow-right"></i></Button>
					</ButtonGroup>
				</Col>
			</div>
		)
	}

}
