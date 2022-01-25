import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {login} from "../Features/userSlice";
import { Link,useNavigate} from 'react-router-dom'
import { } from 'react-router-dom'
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap'
import loginImage from './Logo.jpg'
import './login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Validation from './Validation';
import Axios from 'axios';

function LoginForm( )  {
 
	let navigate = useNavigate();

	const url = 'http://restapi.adequateshop.com/api/authaccount/login'
	
	const [details, setDetails] = useState({
		email:"",
	    password:""
	});

    const [errors, setErrors] = useState("");
    const dispatch = useDispatch();

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
		setErrors(Validation(details));
         
		dispatch(login({
			...details,
			[e.target.name]: e.target.value, 
			loggedIn:true,
		}));

        Axios
		.post(url, details)
		.then(res=>{
			console.log('Posting data',res);
            setErrors(Validation(details));
			if (details.email !== '' && details.password !== ''){
				navigate('/home', {
					state: {
					  email: res.data.data.Name ,
					}
				  });
				console.log('success');
			}
		}).catch(err =>console.log(err.res))

    };

	const handleChange =  (e) =>{
		setDetails({
			...details,
			[e.target.name]: e.target.value,
		});
	}	

    const Login =details =>{
        console.log(details);
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
                               <Form.Group controlId='email'>
									<Form.Label className='loginLable'>Email:</Form.Label>
									<Form.Control
										className='email'
										type='email'
                                        name='email'
										placeholder='Email'
										value={details.email}
										onChange={handleChange}
									></Form.Control>
									{errors.email && <p className="error">{errors.email}</p>}
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
									{errors.password && <p className="error">{errors.password}</p>}
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
