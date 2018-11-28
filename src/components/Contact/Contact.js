import React from 'react'
import {Button, FormGroup, ControlLabel, FormControl, Grid, Form} from 'react-bootstrap'
import PageHeader from '../Template/PageHeader'

class Contact extends React.Component{
  constructor (props){
      super(props);
      this.state={
        name: "",
        email: "",
        topic: "",
        message: ""
      }

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeTopic = this.handleChangeTopic.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeTopic(event) {
    this.setState({topic: event.target.value});
  }

  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event){

    var data = new FormData();
    data.set('name', this.state.name);
    data.set('email', this.state.email);
    data.set('topic', this.state.topic);
    data.set('message', this.state.message);

  }

  render(){
    return(
      <div>

      <Grid>
        <div className="white">
              <PageHeader name="Fale com nossa equipe!"/>
              <Form className="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <ControlLabel>Nome:</ControlLabel>
                  <FormControl type="text" value={this.state.name} onChange={this.handleChangeName}/><p/>
                  <ControlLabel>Email:</ControlLabel>
                  <FormControl type="email" value={this.state.email} onChange={this.handleChangeEmail}/><p/>
                  <ControlLabel>Assunto:</ControlLabel>
                  <FormControl type="text" value={this.state.topic} onChange={this.handleChangeTopic}/><p/>
                  <ControlLabel>Mensagem:</ControlLabel>
                  <FormControl componentClass="textarea" value={this.state.message} onChange={this.handleChangeMessage}/><p/>
                </FormGroup>
                <div className="center"><Button type="submit" bsStyle="success">Submit</Button></div>
              </Form>
        </div>
      </Grid>
      </div>
    )
  }
}



export default Contact;
