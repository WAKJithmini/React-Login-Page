import React, {useState} from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import {  } from 'react-router-dom'
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap'
import loginImage from './Logo.jpg'
import './login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Validation from './Validation';

function LoginForm( )  {
 
	let navigate = useNavigate();
    const [details, setDetails] = useState({
		name:"",
	    password:""
	});
    
    const submitHandler = e =>{
         e.preventDefault();
         Login(details);
		 setErrors(Validation(details));
 
    }
	const handleChange =  (e) =>{
		setDetails({
			...details,
			[e.target.name]: e.target.value,
		});
	}	
    const [errors, setErrors] = useState("");
    const [user, setUser] = useState({name:""});
       const Login =details =>{
       console.log(details);
	   
       if(details.password !== '' ){
		navigate("home/");
		setUser({
			name:details.name
		})
            }else{
            console.log("details don't match");
            setErrors("details don't match");
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
                               <Form.Group controlId='name'>
									<Form.Label className='loginLable'>Username:</Form.Label>
									<Form.Control
										className='loginInput'
										type='text'
                                        name='name'
										placeholder='Username'
										value={details.name}
										onChange={handleChange}
									></Form.Control>
									{errors.name && <p className="error">"{errors.name}</p>}
								</Form.Group>
                                 <br/>
								<Form.Group controlId='password'>
									<Form.Label className='loginLable'>Password:</Form.Label>
									<Form.Control
										className='loginInput'
										type='password'
										name ='password'
										placeholder='Password'
										value={details.password}
										onChange={handleChange}
									></Form.Control>
									{errors.password && <p className="error">"{errors.password}</p>}
								</Form.Group>
                                <br/>
								
									<Button
										className=' loginButton'
										type='submit'
										variant='primary'
										value='Login'
										onClick={submitHandler}
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
