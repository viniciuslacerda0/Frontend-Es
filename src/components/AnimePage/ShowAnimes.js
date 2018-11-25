import React from 'react';
import '../../App.css'
import '../../reset.css'
import {Grid, Col} from 'react-bootstrap';
import PageHeader from '../Template/PageHeader';
import AnimeBox from './AnimeBox';

import Axios from 'axios'

class ShowAnimes extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      animes:[],
      size: 0
    }
  }

  componentDidMount() {
    Axios.get('http://34.239.129.125/animes')
    .then(response => this.setState({animes:response.data.content.animes}))
    .then(res => this.setState({size: Math.ceil(this.state.animes.length/6)}))
  }

  render() {
    const animes = this.state.animes;
    const size = this.state.size;

    return(
      <div>
        <PageHeader name="Animes"/>
        <Grid style={{"textAlign":"center"}}>
          
          <Col md={2}>              
          {animes.map((a, index) => { 
                if(index < size){return(<AnimeBox name={a.name} thumb={a.thumb_url}/>)}
          })}</Col>
          
          <Col md={2}>              
          {animes.map((a, index) => {
                if(index >= size && index < size*2){return(<AnimeBox name={a.name} thumb={a.thumb_url}/>)}
          })}</Col>
          
          <Col md={2}>              
          {animes.map((a, index) => {
                if(index >= size*2 && index < size*3){return(<AnimeBox name={a.name} thumb={a.thumb_url}/>)}
          })}</Col>
          
          <Col md={2}>              
          {animes.map((a, index) => {
                if(index >= size*3 && index < size*4){return(<AnimeBox name={a.name} thumb={a.thumb_url}/>)}
          })}</Col>
          
          <Col md={2}>              
          {animes.map((a, index) => {
                if(index >= size*4 && index < size*5){return(<AnimeBox name={a.name} thumb={a.thumb_url}/>)}
          })}</Col>
          
          <Col md={2}>              
          {animes.map((a, index) => {
                if(index >= size*5 && index < size*6){return(<AnimeBox name={a.name} thumb={a.thumb_url}/>)}
          })}</Col>

        </Grid>
      </div>

    )
  }
}

export default ShowAnimes;
