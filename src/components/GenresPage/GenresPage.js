import React from 'react';

import {Grid, Col, Row} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';

import PageHeader from '../Template/PageHeader';
import Propaganda from '../Template/Propaganda';
import Topo from '../Template/Topo';
import Genre from './Genre';

import './GenresPage.css';

export default class GenresPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			genres : [
				{nome: "açao", animes:['1', '2', '3', '4'], len: 4},
				{nome: "aventura", animes: ['2', '3', '7', '10', '11', '14', '20', '21', '50'], len: 9},
				{nome: "comedia", animes: ['2', '3', '7', '10', '14', '20', '21', '50'], len: 8},
				{nome: "drama", animes: ['2', '3', '7', '10', '11', '14', '20', '21', '50'], len: 9},
				{nome: "kawaii", animes: ['2', '3', '7', '10', '11', '14'], len: 6},
				{nome: "shoujo", animes: ['2', '3', '7', '10', '11', '14', '20', '21', '50'], len: 9},
				{nome: "shonen", animes: ['2', '3', '14', '20', '21', '50'], len: 6},
				{nome: "ecchi", animes: ['2', '3', '7', '10', '11', '14', '20', '21'], len: 8},
				{nome: "epic", animes: ['2', '3', '7', '10', '11', '14', '20'], len: 7},
				{nome: "zombies", animes: ['2', '3', '7', '10', '11', '14', '20', '21', '50'], len: 9},
				{nome: "ninjas", animes: ['2', '50'], len: 2},
				{nome: "yuri", anime: ['2', '3', '7', '10', '11', '14', '20', '21', '50'], len: 9},
				{nome: "sports", animes: ['2', '3', '7', '10', '11', '14', '50'], len: 7},
				{nome: "terror", animes: ['2', '3', '7'], len: 3},
			]
		}
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
								<Link 	className="genreBox" 
										to={{ 
											pathname: `/generos/${a.nome}`,
											state: { nome: `${a.nome.charAt(0).toUpperCase() + a.nome.slice(1)}`}
								}}> 
									{a.nome.toUpperCase()}({a.len}) 
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