import React, {useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import {  } from 'react-router-dom'
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap'
import loginImage from './Logo.jpg'
import './login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from './Home'

function LoginForm()  {

    const [details, setDetails] = useState({name:"", password:""});
    
    const submitHandler = e =>{
         e.preventDefault();
         Login(details);
 
    }
	
	const adminUser ={ // the place where we chack the login details
        password:"admin@123"
       }
     
       const [user, setUser] = useState({name:""});
       const [error, setError] = useState("");
       const Login =details =>{
       console.log(details);
     
       if(details.password === adminUser.password){
			console.log("Logged in");
			setUser({
				name:details.name
			});
			
            }else{
            console.log("details don't match");
            setError("details don't match");
         }
       }
     

	return (
		
		<div className='Login'>
			<Card className='loginCard'>
                 <Row>
					<Col>
						<Image className='loginImage' src={loginImage} />
					</Col>

                    <Col>
						<div>
                           <Form className='form'  onSubmit={submitHandler}>
                           <p className='loginLogo'><AccountCircleIcon/></p>
                           <h1 className='loginTitle'><b>LOGIN</b></h1>
                            {(error !="") ? ( <div className="error">{error}</div>):""}
                               <Form.Group controlId='name'>
									<Form.Label className='loginLable'>Username:</Form.Label>
									<Form.Control
										className='loginInput'
										type='text'
                                        name='name'
										placeholder='Username'
                                        onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}
									></Form.Control>
								</Form.Group>
                                 <br/>
								<Form.Group controlId='password'>
									<Form.Label className='loginLable'>Password:</Form.Label>
									<Form.Control
										className='loginInput'
										type='password'
										placeholder='Password'
                                        onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}
									></Form.Control>
								</Form.Group>
                                <br/>
								
									<Button onClick={()=>{}}
										className=' loginButton'
										type='submit'
										variant='primary'
										value='Login'
									>
										Login
									</Button>
								
							</Form>

							<Row>
								<Col>
									<Link to='/forgotpassword'>Forgotten password?</Link>
								</Col>
							</Row>
						</div>
					</Col>
					
                    </Row>
			</Card>
		</div>
		
	)
}

export default LoginForm
