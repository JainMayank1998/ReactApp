import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,  Container} from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Body() {
    return (
      <div  className= "row" style={{marginTop:'10px',padding:'10px'}}>
          

 { /* add car rental policy */}
          <div className='col-md-12' >
          <Navbar  collapseOnSelect style={{backgroundColor:"DarkSlateBlue"}} >
  <Container>
    <Navbar.Brand href="#" style={{ fontFamily:"cursive", fontWeight:"bold", color:"white",marginTop:'5px',padding:'5px' }}>Add Car Rental Cancellation Policy</Navbar.Brand>
  </Container>
</Navbar>
{/*policy name and policy description*/}
<Card>
  <Card.Body>
  <table>
    <tr>
<div className="row" style={{marginTop:'10px',padding:'10px'}}>
<div class="form-wrapper">

<div class='full-input' style={{backgroundColor:"white",marginTop:'10px',padding:'10px'}}>
  <th>
    <h3>Policy Name</h3>
<label for='name'></label>
<textarea id="qual" rows="1" cols="30" placeholder="Enter Policy Name"></textarea>
</th>
<th>
<h3>Policy Description</h3>
  <label for='email'></label>
  <textarea id="qual" rows="1" cols="30" placeholder=" Enter Policy Description"></textarea>
  </th>
  
  </div>
  
  </div>
</div>
</tr>
  </table>
</Card.Body>
      </Card>

{/* policy Value  and drop down1*/}
<Card>
  <Card.Body>

<div className="container" style={{backgroundColor:"White",marginTop:'10px',padding:'10px'}}>
  <div className="row"><h2>Policy Value</h2></div>
  <div className="row" style={{padding:'2px'}}>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Policy Source
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/Expedia">Expedia</Dropdown.Item>
    <Dropdown.Item href="#/Provider">Provider</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>


<div className="row" style={{padding:'5px', marginTop: '10px'}}>
<div class="form-wrapper">

<div class='full-input' style={{backgroundColor:"white",marginTop:'10px',padding:'10px'}}>
  
<label for='Offset Days'></label>
<textarea id="qual" rows="1" cols="30" placeholder="Offset Days"></textarea>
  
  


  <label for='Offset Hours'></label>
 
  <textarea id="qual" rows="1" cols="30" placeholder="Offset Hours"></textarea>
  <label for='Value'></label>
  <textarea id="qual" rows="1" cols="30" placeholder="Value"></textarea>
  <label  >
  <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Fee Basis
  </Dropdown.Toggle>

  <Dropdown.Menu variant="light">
    <Dropdown.Item href="#/Amount">Amount</Dropdown.Item>
    
    
  </Dropdown.Menu>
</Dropdown>
</label>
<label  >
  <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Currency
  </Dropdown.Toggle>

  <Dropdown.Menu variant="light">
    <Dropdown.Item href="#/Amount">USD</Dropdown.Item>
    <Dropdown.Item href="#/Amount">INR</Dropdown.Item>
    <Dropdown.Item href="#/Amount">GBP</Dropdown.Item>
    <Dropdown.Item href="#/Amount">HUF</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</label>
<label  >
  <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    No Show
  </Dropdown.Toggle>

  <Dropdown.Menu variant="light">
    <Dropdown.Item href="#/Amount">Yes</Dropdown.Item>
    <Dropdown.Item href="#/Amount">No</Dropdown.Item>
    
    
  </Dropdown.Menu>
</Dropdown>
</label>
<table>
  <tr>
    <th>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"></link>
            </head>

     
    <span><i class="fas fa-trash"></i>

</span>
</th>
</tr>
</table>

  


<div  style={{ display: 'flex', justifyContent: 'flex-end' }}>
<>
  <Button href="#">+ Add Rule</Button> 
  
</>
</div>
</div>

</div>
</div>
</div>
  </div>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
  <div className="row" style={{padding:'5px',  margin: '0'}}>
<div className="container" style={{backgroundColor:"white",marginTop:'10px',padding:'10px'}}>
  <div className="row"><h2>Restriction</h2></div>
 
  
<div class="form-wrapper">

<div class='full-input' style={{backgroundColor:"white",marginTop:'10px',padding:'10px'}}>
<h2>Stop Cancel Before:</h2>
<label for='name'></label>
<textarea id="qual" rows="1" cols="30" placeholder="Days"></textarea>
  
  <label for='email'></label>
  <textarea id="qual" rows="1" cols="30" placeholder="Hours"></textarea>
  
 
  </div>
  </div>
  </div>
  </div>
  </Card.Body>
</Card>

<div  style={{ display: 'flex', justifyContent: 'flex-end' }}>
<>
  <Button href="#">Add Policy</Button> 
  
</>
</div>

  </div>
  </div>
);  
    
  };
  
  export default Body;
  