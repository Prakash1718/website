import React from 'react'
import { Container, Nav, Navbar,Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  return (<div>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      
    </Nav>
   <Nav>
    <Button variant="white" onClick={()=>navigate('/register')}>Register</Button>
    <Button variant="primary" onClick={()=>navigate('/login')}>Login</Button>
    </Nav>
    </Container>
  </Navbar>
  <Card>
  <Card.Body>
      <Card.Text>
      Don't let my motorcycle ride interfere with the safety of your phone call.
 It's your road others can ride it with you but no one can ride it for you.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/allbikes-1539286251.jpg?crop=0.987xw:1.00xh;0.00814xw,0&resize=1200:*" />
    
  </Card>
  
  </div>
  
  )
}

export default Home