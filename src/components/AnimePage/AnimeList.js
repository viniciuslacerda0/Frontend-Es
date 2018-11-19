import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import '../Styles/styles.css'
import Topo from '../Template/Topo'
import ShowAnimes from '../AnimePage/ShowAnimes'
import Propaganda from '../Template/Propaganda'
import PageHeader from '../Template/PageHeader'
import Pagination from '../Pagination/Pagination'

export default class AnimeList extends Component {

	constructor(props){
		super(props);
		var listAnimes = [{name: "nanatsu no taizai", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "naruto", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "dragon ball",  thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },
        {name: "fulmmetal", thumb: "https://i.kym-cdn.com/photos/images/newsfeed/001/155/275/559.gif" },]

        this.onChangePage = this.onChangePage.bind(this);

         this.state = { list: [], pageOfItems: [], exampleItems: listAnimes }

	}

	 onChangePage(pageOfItems){
        this.setState({ pageOfItems: pageOfItems});
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
					    <ShowAnimes list={this.state.pageOfItems}/>
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

