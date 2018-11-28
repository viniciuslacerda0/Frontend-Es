import React from 'react';
import Topo from '../Template/Topo';
import Propaganda from '../Template/Propaganda';
import PageHeader from '../Template/PageHeader';
import AnimeByGenreBox from './AnimeByGenreBox';
import {Grid, Col, Row} from 'react-bootstrap';
import Axios from 'axios'

export default class Genre extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			animes: [],
			size: 0
		}
	}

	componentDidMount = () => {
		Axios.get('http://34.239.129.125/animes?genre='+this.props.match.params.id)
		.then(res => this.setState({
			animes: res.data.content.animes}))
		.catch(() => alert('error'))
		
	}


	render() {
		const size = this.state.size;

		return(
			<div>
				<Topo/>
				<Propaganda/>
				<div className='container todo'>
					<Grid >
					<Col md={9}>
						<Row>
							<PageHeader name={this.props.match.params.id}/>
						</Row>
						<Col md={4}>
							{this.state.animes.map((a, index) => {
								if(index%3 === 0 ){return(<AnimeByGenreBox nome={a.name} id={a.id} thumb={a.thumb_url}/>)} else {return null}
							})}
						</Col>
						<Col md={4}>
							{this.state.animes.map((a, index) => {
								if(index%3 === 1){return(<AnimeByGenreBox nome={a.name} id={a.id} thumb={a.thumb_url}/>)} else {return null}
							})}
						</Col>
						<Col md={4}>
							{this.state.animes.map((a, index) => {
								if(index%3 === 2){return(<AnimeByGenreBox nome={a.name} id={a.id} thumb={a.thumb_url}/>)} else {return null}
							})}
						</Col>
					</Col>
					<Col md={3}>
						<PageHeader small='PARCEIROS'/>
						espaço para anuncio
					</Col>
				</Grid>
				</div>

			</div>
		)
	}
}
