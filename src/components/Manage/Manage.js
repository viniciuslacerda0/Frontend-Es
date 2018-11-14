import React from 'react';
import '../Styles/styles.css'
import NewAnime from './NewAnime'
import Animes from './Animes'
import Topo from '../Template/Topo'
import PageHeader from '../Template/PageHeader'

const Manage = () => (
    <div className="bloco">
      <Topo/>
      <PageHeader name='Gerencia' small='de animes'/>
      <NewAnime />
      <Animes />
    </div>
);


export default Manage;
