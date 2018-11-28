import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import '../Styles/styles.css'
import Anime from '../AnimePage/Anime'
import Topo from '../Template/Topo'
import Propaganda from '../Template/Propaganda'
import PageHeader from '../Template/PageHeader'
import Pagination from '../Pagination/Pagination'

export default class AnimePage extends Component {

        constructor(props){
		super(props);
		

	}

	onChangePage(pageOfItems){
                this.setState({ pageOfItems: pageOfItems});
    }


	render() {
		return(
		<div>
				<Propaganda/>
				<div className='container todo'>
				
			<Grid >
				<Col md={9}>
					<Row>
					        <Anime list={this.state.pageOfItems}/>
                            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
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

export default AnimePage;
