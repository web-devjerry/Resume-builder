import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate , Routes,Route} from "react-router-dom";  
// import sidebar from './sidebar';






const LandingPage=()=> {
  
  const navigate = useNavigate();
  return (
    <div>
 
      {/* <sidebar/> */}
      {/* nav bar starts here */}
     
     {/* nevbar ends and next component starts here */}
     <div>
     <Card >
      <Card.Body>
        <Card.Title className='temp-head'><h1>Select Templates</h1></Card.Title>
        <Card.Text>
         Select A Template To Get Started
        </Card.Text>
      

        </Card.Body>
        <div className='Resume-selector'>
          <Card style={{ width: '22%' }}>
        <Card.Body>
      <img id='test1' src="https://i.pinimg.com/736x/9f/54/42/9f54425fae6a10bf84e3c09b348b2378--school-photography-exposure-photography.jpg" alt=""
       onClick={()=>navigate("/resumebuild")} />
       
      </Card.Body>
      </Card>
          <Card style={{ width: '22%' }}>
        <Card.Body>
      <img id='test1' src="https://i.pinimg.com/736x/9f/54/42/9f54425fae6a10bf84e3c09b348b2378--school-photography-exposure-photography.jpg" alt=""
       onClick={()=>navigate("/sidebar")} />
       
      </Card.Body>
      </Card>
          <Card style={{ width: '22%' }}>
        <Card.Body>
      <img id='test1' src="https://i.pinimg.com/736x/9f/54/42/9f54425fae6a10bf84e3c09b348b2378--school-photography-exposure-photography.jpg" alt=""
       onClick={()=>navigate("/sidebar")} />
       
      </Card.Body>
      </Card>
          <Card style={{ width: '22%' }}>
        <Card.Body>
      <img id='test1' src="https://i.pinimg.com/736x/9f/54/42/9f54425fae6a10bf84e3c09b348b2378--school-photography-exposure-photography.jpg" alt=""
       onClick={()=>navigate("/sidebar")} />
       
      </Card.Body>
      </Card>
      
          {/* <Card style={{ width: '22%' }}>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
       <h3>1st Resume</h3>
        </Card.Text>
       
      </Card.Body>
      </Card>
          <Card style={{ width: '22%' }}>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
       <h3>1st Resume</h3>
        </Card.Text>
       
      </Card.Body>
      </Card>
          <Card style={{ width: '22%' }}>
     
      </Card> */}
        </div>
      
    </Card>
    </div>
{/* ============================================= */}

  

    </div>
  )
}

export default LandingPage;