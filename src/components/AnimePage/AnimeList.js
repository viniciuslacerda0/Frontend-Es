import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import '../Styles/styles.css'
import Topo from '../Template/Topo'
import ShowAnimes from '../AnimePage/ShowAnimes'



const ShowAnimes = () =>(
        <div>
			<Topo/>
            <ShowAnimes/>
		</div>
);
  


export default ShowAnimes;