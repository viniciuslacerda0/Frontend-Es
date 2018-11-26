import React from 'react';
import {Glyphicon, Button, FormControl} from 'react-bootstrap'
import Axios from 'axios'

class Episodes extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        anime: this.props.animeId,
        chapter: this.props.data.chapter,
        name: this.props.data.name,
        id: this.props.data.id,
        video: this.props.data.video_url,
        description: this.props.data.description
      }
      this.deleteEpisode = this.deleteEpisode.bind(this);
      this.editEpisode = this.editEpisode.bind(this);
      this.edited = this.edited.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleChapter = this.handleChapter.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
    }

    deleteEpisode(){
      var animeId = this.state.anime;
      var episodeId = this.state.id;
      var token = sessionStorage.getItem('token');
      Axios.delete('http://34.239.129.125/animes/'+animeId+'/episodes/'+episodeId, { headers: {
          authorization: `Bearer ${token}`
      }}).then(() => document.location.reload(true)).catch(()=>alert("error"))
    }

    editEpisode(){
      this.setState({input: true});
    }

    handleFile(event){
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        this.setState({
          video: file
        });
      }

      reader.readAsDataURL(file)
    }

    handleName(event){
      this.setState({name: event.target.value})
    }

    handleChapter(event){
      this.setState({chapter: event.target.value})
    }

    handleDescription(event){
      this.setState({description: event.target.value})
    }

    edited(){
      var data = {};
      data.name = this.state.name;
      data.chapter = this.state.chapter;
      data.description = this.state.description;
      data.video = this.state.video;
      var animeId = this.state.anime;
      var episodeId = this.state.id;
      var token = sessionStorage.getItem('token');
      Axios.delete('http://34.239.129.125/animes/'+animeId+'/episodes/'+episodeId, data,
      {
         headers: {
           authorization: `Bearer ${token}`,
           "Content-Type": "multipart/form-data"
         }
      }).then(() => document.location.reload(true)).catch(() => alert("error"))

      this.setState({input: false});

    }

    render(){
      if(!this.state.input){
        return(
          <tr>
                <td><p className="center">{this.state.chapter}</p></td>
                <td><p className="center">{this.state.name}</p></td>
                <td><p className="center">{this.state.description}</p></td>
                <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.deleteEpisode}>
                     <Glyphicon glyph="remove"/></Button></p>
                </td>
                <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.editEpisode}>
                     <Glyphicon glyph="pencil"/></Button></p>
                </td>
        </tr>
        );
      }
    else{
      return(
        <tr>
              <td><FormControl type="number" className="center number" placeholder={this.props.data.chapter} onChange={this.handleChapter}/></td>
              <td><FormControl type="text" className="center" placeholder={this.props.data.name} onChange={this.handleName}/></td>
              <td><FormControl componentClass="textarea" type="text" className="center number" placeholder={this.props.data.description} onChange={this.handleDescription}/></td>
              <td><p className="center"><Button className="btn btn-default btn-sm btn-red" onClick={this.deleteEpisode} disabled>
                   <Glyphicon glyph="remove"/></Button></p>
              </td>
              <td> <p className="center"><Button type="button" className="btn btn-default btn-sm btn-green" onClick={this.edited}>
                   <Glyphicon glyph="ok"/></Button> </p>
              </td>

              <td><FormControl type="file" onChange={this.handleFile}/><p/></td>

      </tr>
      );
    }


  }
}


export default Episodes;
