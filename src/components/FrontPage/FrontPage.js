import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import Animes from './Animes'
import Topo from '../Template/Topo'
import Propaganda from '../Template/Propaganda'
import PageHeader from '../Template/PageHeader'
export default class FrontPage extends Component {

	render() {
		return(
		<div>
			<Topo/>
				<Propaganda/>
				<div className='container todo'>
			<Grid >
				<Col md={9}>
					<Row>
						<PageHeader name='Ultimos' small='lancamentos'/>
					</Row>
					<Row>
					<Animes/>
					</Row>
				</Col>
				<Col md={3}>
					<PageHeader name='Top anime'/>

				</Col>
			</Grid>
			</div>
			</div>
		)
	}


}
