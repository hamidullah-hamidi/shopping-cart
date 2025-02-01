import { Col, Row } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {
  return (
    <>
      <h1 className='text-center'>Welcome to the Store!</h1>
      <Row xs={1} md={3} className='g-4 text-center'>
        {productsArray.map((product, idx) => (
          <Col className='text-center' key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
