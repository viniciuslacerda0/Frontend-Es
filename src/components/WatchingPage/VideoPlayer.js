import React from 'react';
//import "../../../node_modules/video-react/dist/video-react.css"; // import css
import './WatchingPage.css';
import OptionsBar from './OptionsBar';

export default class VideoPlayer extends React.Component {


	render() {
		return(
			<div >
				<div className="embed-responsive embed-responsive-16by9 videoPlayer">
				<iframe
					className="embed-responsive-item"
					src={this.props.url}
					title={this.props.anime+" - "+this.props.episodio}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
				</iframe>
				</div>
				<OptionsBar anime={this.props.anime} episodio={this.props.episodio} animeID={this.props.animeID} episodeID={this.props.episodeID}/>
			</div>
		)
	}



}
