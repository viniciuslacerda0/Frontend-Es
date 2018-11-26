import React, { Component } from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';
import OptionsBar from './OptionsBar';
import Propaganda from '../Template/Propaganda';
import SideBar from './SideBar';
import './WatchingPage.css'

export default class WatchingPage extends Component {    

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.location)
	}

	render() {
		return(
			<div>
				<Propaganda/>
				<Grid>
					<Col className="video" xs={12} md={9}>
						<Row><VideoPlayer url={this.props.location.state.url} anime={this.props.location.state.animeName} episodio={this.props.location.state.epName}/></Row>
					</Col>
					<Col className="sideBar" xs={12} md={3}>
						<SideBar temporada="Episódios"/>
					</Col>
				</Grid>
			</div>
		)
	}
}
