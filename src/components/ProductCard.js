import { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { CardContext } from '../cartContext';

function ProductCard({ product }) {
  const cart = useContext(CardContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column='true' sm='6'>
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm='6'>
                <Button sm='6' className='mx-2'>
                  +
                </Button>
                <Button sm='6' className='mx-2'>
                  -
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>
            Add to card
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
