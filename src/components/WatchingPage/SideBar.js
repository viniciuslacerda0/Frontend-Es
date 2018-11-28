import React from 'react';
import {Panel, Button, ButtonGroup, DropdownButton, MenuItem, Glyphicon} from 'react-bootstrap';
import './WatchingPage.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';



export default class SideBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			episodes: []
		}

	}

	renderEpisodeList(){
		
		return this.state.episodes.map(a => (<li><Link   className="genreBox"
		to={{
			pathname: `/video/${a.id}`,
			state: { url: a.video_url, animeName: this.state.animeName, epName: a.name, animeID: this.state.id}
		}}>
		  <span className='episodebtn'><Glyphicon glyph="play-circle"/> Episódio {a.chapter}</span>
		</Link></li>));
		
	}

	componentWillMount(){
		Axios.get('http://34.239.129.125/animes/'+ this.props.animeName  + '/episodes')
		//.then(r => console.log(r))
		.then(r => this.setState({episodes: r.data.content.episodes}));
	}

	render() {
		return (
			<div className="sidebar">
				
					<div id="sidebar">
					<ButtonGroup style={{marginBottom: "10px"}}>
					<ul>
					{this.renderEpisodeList()}
					</ul>
					</ButtonGroup>
					</div>
				
				
			</div>
		)
	}


}