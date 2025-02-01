import { Col, Row } from 'react-bootstrap';
import { productsArray } from '../productsStore';

function Store() {
  return (
    <>
      <h1>Welcome to the Store!</h1>
      <Row xs={1} md={4} className='g-4'>
        {productsArray.map((product, idx) => (
          <Col align='center'>
            <h2>{product.title}</h2>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
