import React , {useState} from 'react'
import LoginForm from './LoginForm'
import { Link , Navigate} from 'react-router-dom'
import {  Button } from 'react-bootstrap'

const Home = () => {
    const [user, setUser] = useState({name:""});
    const [error, setError] = useState("");
    
    const Login =details =>{
        <Navigate to="/home"/>
        console.log(details);}
    const Logout =() => {
         setUser({username:""});
         setError("");
       }
     
	return (
		
     <div className="App">
      {(user.name !=="") ? (
        <div className="welcome">
          <h2>welcome ,<span>{user.name}</span></h2>
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
