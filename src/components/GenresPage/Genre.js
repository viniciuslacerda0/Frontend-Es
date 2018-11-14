import React from 'react';
import Topo from '../Template/Topo';
import Propaganda from '../Template/Propaganda';
import PageHeader from '../Template/PageHeader';
import {Grid, Col, Row} from 'react-bootstrap';


export default class Genre extends React.Component {

	render() {
		return(
			<div>
				<Topo/>
				<Propaganda/>
				<div className='container todo'>
					<Grid >
					<Col md={9}>
						<Row>
							<PageHeader name={this.props.location.state.nome}/>
						</Row>
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