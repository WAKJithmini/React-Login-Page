import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './Components/Home'
import LoginForm from './Components/LoginForm'

function App () {
	return (
		<Router>
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/' element={<LoginForm />}/>
						<Route path='/home' element={<Home />} />
						<Route path='*'/>
					</Routes>
				</Container>
			</main>
        </Router>
	)
}

export default App