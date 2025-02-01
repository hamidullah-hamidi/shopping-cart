import { useState } from 'react';
import { Button, Navbar, Modal, Container } from 'react-bootstrap';

function NavbarComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar expand='sm' className='mb-4'>
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=' justify-content-end'>
          <Button onClick={() => setShow(true)}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>This is the modal body</h3>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
