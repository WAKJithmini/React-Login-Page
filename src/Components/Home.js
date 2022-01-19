import React , {useState} from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import {  Button } from 'react-bootstrap'

const Home = () => {

    const [user, setUser] = useState({name:""});
    const [error, setError] = useState("");
    
    const Logout =() => {
         setUser({name:""});
         setError("");
       }              
    
	return (
		<div className="App">
      {(user.name =="") ? (
        <div className="welcome">
          <h2>welcome ,{user.name}</h2>
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

      ): (
        <LoginForm />
      )}
    </div>
	)
}

export default Home
