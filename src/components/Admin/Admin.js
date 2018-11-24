import React from 'react';
import '../Styles/styles.css'
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import OptionBox from './OptionBox'
import NewAnime from './NewAnime'
import EditAnime from './EditAnime'
import Anime from './Anime'
const Admin = () => (
    <div className="adminBoard">
    	<Grid>
    	<Col md={1}></Col>
		<Col md={2}><Link to="/"><OptionBox icon="fas fa-home" option="Voltar ao site"/></Link></Col>
    	<Col md={2}><Link to="/admin/adicionar_anime"><OptionBox icon="far fa-plus-square" option="Adicionar Anime"/></Link></Col>
    	<Col md={2}><Link to="/admin/adicionar_episodios"><OptionBox icon="far fa-plus-square" option="Adicionar Episódios"/></Link></Col>
    	<Col md={2}><Link to="/admin/editar_anime"><OptionBox icon="far fa-edit" option="Editar/Remover"/></Link></Col>
    	<Col md={2}><Link to="/admin/editar_episodios"><OptionBox icon="far fa-edit" option="Remover Episódios"/></Link></Col>
    	<Col md={1}></Col>
   		</Grid>
    </div>
);


export default Admin;
