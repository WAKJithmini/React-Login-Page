import React , {useState} from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import {  Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../Features/userSlice'

const Home = () => {
    const user =useSelector(selectUser); 

    const Logout =(state) => {
      state.user = null; 
    }
	return (
		<div className="logout">
      <h1>Welcome <span className='name'>{user.name}</span></h1>
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
