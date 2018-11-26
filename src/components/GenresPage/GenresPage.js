import React from 'react';

import {Grid, Col, Row} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';

import PageHeader from '../Template/PageHeader';
import Propaganda from '../Template/Propaganda';
import Topo from '../Template/Topo';
import Genre from './Genre';
import Axios from 'axios'
import './GenresPage.css';

export default class GenresPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			genres : [
				
			]
		}
		Axios.get('http://34.239.129.125/animes/genres').then(res => this.setState({genres: res.data.content.genres})).catch(() => alert("error"));
	}

	render() {
		return(
			<div>
				<Topo/>
				<Propaganda/>
				<div className='container todo'>
					<Grid >
					<Col md={9}>
						<Row>
							<PageHeader name="Gêneros"/>
						</Row>
						<main>
							{this.state.genres.map(a =>
								<Link className="genreBox"
										to={{
											pathname: `/generos/${a}`,
								}}>
									{a}
								</Link>
							)}
						</main>
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
