import React from 'react';
import { Card,CardGroup} from 'react-bootstrap';
import Frame from '../../images/Frame.png';
import Frame1 from '../../images/Frame-1.png';
import Frame2 from '../../images/Frame-2.png';
import Group from '../../images/Group.png';

const Home = () => {
    return (
        <div>
            <div className='allCard'>

<CardGroup>
  <Card className='Card col-md-2  text-center m-3 p-4'>
    <Card.Img variant="top" src={Frame} />
    <Card.Body>
      <Card.Title>Bike</Card.Title>
    </Card.Body>
  </Card>
  <Card className='Card col-md-2  text-center m-3 p-4'>
    <Card.Img variant="top" src={Frame1} />
    <Card.Body>
      <Card.Title>Car</Card.Title>
     
    </Card.Body>
   
  </Card>
  <Card className='Card col-md-2  text-center m-3 p-4'>
    <Card.Img variant="top" src={Frame2} />
    <Card.Body>
      <Card.Title>Bus</Card.Title>
      
    </Card.Body>
    
  </Card>

  <Card className='Card col-md-2  text-center m-3 p-4'>
    <Card.Img variant="top" src={Group} />
    <Card.Body>
      <Card.Title>Train</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>
</div>
   
        </div>
    );
};

export default Home;