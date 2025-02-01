import { Button, Card } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant='primary'>Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
