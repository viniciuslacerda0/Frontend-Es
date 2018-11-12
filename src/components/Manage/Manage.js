import React from 'react';
import '../Styles/styles.css'
import NewAnime from './NewAnime'
import Animes from './Animes'

const Manage = () => (
    <div className="bloco">
      <h1>Gerencia de animes</h1>
      <NewAnime />
      <Animes />
    </div>
);


export default Manage;
