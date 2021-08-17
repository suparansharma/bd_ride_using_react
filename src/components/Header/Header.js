import React from 'react';
import './Header.css';
import { Card,CardGroup } from 'react-bootstrap';
import Frame from '../../images/Frame.png';
import Frame1 from '../../images/Frame-1.png';
import Frame2 from '../../images/Frame-2.png';
import Group from '../../images/Group.png';




const Header = () => {
    return (
        <div className='header'>
        <h1>Bd Ride</h1>
        <nav>
        <a href="/Home">Home</a>
        <a href="/Destination">Destination</a>
        <a href="/Blog">Blog</a>
        <a href="/Contact">Contact</a>
        </nav>
<div>

<CardGroup>
  <Card>
    <Card.Img variant="top" src={Frame} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Frame1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Frame2} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Group} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
        
        </div>
        
    );
};

export default Header;