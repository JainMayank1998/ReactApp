import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
function Heading() {
    return (
      <Card>
  <Card.Body>

      <div  className= "row">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars/>
        </Link>
           <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"></link>
            </head>

  
          <div className='col-md-12'>
          <Navbar  collapseOnSelect style={{backgroundColor:"white"}} >
    <Container >
 
   
    <Navbar.Brand href="#home" style={{ fontFamily:"cursive", fontWeight:"bold", color:"blue" }}>    <i class="fas fa-car"></i>  Cars Admin Tool.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   
    </Container>
  </Navbar>
         
          </div>
      </div>
      </Card.Body>
      </Card>
    );
  }
  
  export default Heading;
  