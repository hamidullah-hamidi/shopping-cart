import { useContext } from 'react';
import { CardContext } from '../cartContext';
import { getProductData } from '../productsStore';
import { Button } from 'react-bootstrap';

function CartProduct(props) {
  const cart = useContext(CardContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div>
      <h3>{productData.title}</h3>
      <p>{quantity} Total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button size='sm' onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </div>
  );
}

export default CartProduct;
