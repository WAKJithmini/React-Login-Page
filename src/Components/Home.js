import React from 'react'
import { Link } from 'react-router-dom'
import {  Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../Features/userSlice'

import { useLocation } from 'react-router';

const Home = () => {
    const user =useSelector(selectUser); 

    const Logout =(state) => {
      state.user = null; 
    }
	const location = useLocation();
  console.log(location);

	return (
		<div className="logout">
      <h1>Welcome <span className='email'>{location.state.email}</span></h1>
      <Link to='/'>
				  <Button
					  className=' loginButton'
				  	type='submit'
					  variant='primary'
            onClick={Logout}
			  	>
			  	Logout
			  	</Button>
		      </Link>
    </div>
	)
}

export default Home
