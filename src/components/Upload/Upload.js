import React from 'react';
import '../Styles/styles.css'
import UploadForm from './UploadForm'
import PageHeader from '../Template/PageHeader'
import Topo from '../Template/Topo'

const Upload = () => (
    <div className="bloco">
        <Topo/>
        <PageHeader className="" name='Novo' small='episodio'/>
        <UploadForm />
    </div>
);

export default Upload;
