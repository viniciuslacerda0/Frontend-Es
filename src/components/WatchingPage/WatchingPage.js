import React, { Component } from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';
import Propaganda from '../Template/Propaganda';
import SideBar from './SideBar';
import './WatchingPage.css'
import Axios from 'axios'

export default class WatchingPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			url: "",
			anime: "",
			episodio: "",
			animeID: this.props.match.params.animeID,
			id: this.props.match.params.id
		}


	}

	componentDidMount() {
		Axios.get('http://34.239.129.125/animes/'+ this.state.animeID)
		.then(response => {
				this.setState({
						anime: response.data.content.anime.name,
				})
		})

		Axios.get(`http://34.239.129.125/animes/${this.state.animeID}/episodes/${this.state.id}`).then(res => this.setState({
			url: res.data.content.episode.video_url,
			episodio: res.data.content.episode.name
		}))
	}

	render() {
		return(
			<div>
				<Propaganda/>
				<Grid>
					<Col className="video" xs={12} md={9}>
						<Row><VideoPlayer url={this.state.url} anime={this.state.anime} episodio={this.state.episodio} animeID={this.state.animeID} episodeID={this.state.id}/></Row>
					</Col>
					<Col className="sideBar" xs={12} md={3}>
						<SideBar animeName={this.state.animeID} temporada="Episódios"/>
					</Col>
				</Grid>
			</div>
		)
	}
}
