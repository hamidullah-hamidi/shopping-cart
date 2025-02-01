import { useState } from 'react';
import { Button, Navbar, Modal, Container, Nav } from 'react-bootstrap';

function NavbarComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar expand='sm'>
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=' justify-content-end'>
          <Button onClick={() => setShow(true)}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>Hi Dear</Modal.Header>
        <Modal.Body>
          <h3>you can choose...</h3>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
