import { Col, Row } from 'react-bootstrap';

function Store() {
  return (
    <>
      <h1>Welcome to the Store!</h1>
      <Row xs={1} md={4} className='g-4'>
        <Col align='center'>
          <h1>Product</h1>
        </Col>
        <Col align='center'>
          <h1>Product</h1>
        </Col>
        <Col align='center'>
          <h1>Product</h1>
        </Col>
        <Col align='center'>
          <h1>Product</h1>
        </Col>
      </Row>
    </>
  );
}

export default Store;
