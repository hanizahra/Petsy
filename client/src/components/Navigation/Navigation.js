import React from 'react';
import  './navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		 <nav> 
            <ul>
               	<li className='f3 link dim black underline pa3 pointer'><Link to='/'>Home</Link></li>
              	<li className='f3 link dim black underline pa3 pointer'><Link to='/randomanimal'>Random Animal</Link></li>
              	<li className='f3 link dim black underline pa3 pointer'><Link to="/petslist">Pets List</Link></li>
              	<li className='f3 link dim black underline pa3 pointer'><Link to="/pet">Pet</Link></li>
            </ul>
         </nav>
	)
}

       

export default Navigation