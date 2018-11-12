import React, { Component } from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';
import OptionsBar from './OptionsBar';
import SideBar from './SideBar';
import './WatchingPage.css'

export default class WatchingPage extends Component {    

	constructor(props) {
		super(props);
		this.state = {
			url: "https://www.youtube.com/embed/PYF8Y47qZQY",
			anime: "Naruto",
			temporada: 1,
			episodio: 5
		}
	}

	render() {
		return(
			<div>
				<Grid>
					<Col className="video" xs={12} md={9}>
						<Row><VideoPlayer url={this.state.url} anime={this.state.anime} episodio={this.state.episodio}/></Row>
					</Col>
					<Col className="sideBar" xs={12} md={3}>
						<SideBar temporada={this.state.temporada}/>
					</Col>
				</Grid>
			</div>
		)
	}
}
