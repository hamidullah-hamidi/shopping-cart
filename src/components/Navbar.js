import { useContext, useState } from 'react';
import { Button, Navbar, Modal, Container } from 'react-bootstrap';
import { CardContext } from '../cartContext';

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const cart = useContext(CardContext);

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <Navbar expand='sm' className='mb-4'>
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=' justify-content-end'>
          <Button onClick={() => setShow(true)}>Cart {productCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct) => (
                <h1>{currentProduct.id}</h1>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant='success'>Purchase items!</Button>
            </>
          ) : (
            <h3>There are no items in your cart!</h3>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
