import { createContext, useState } from 'react';
import { getProductData } from './productsStore';

// 1)   create context
const CardContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

// 2)   create Provider
function CartProvider({ children }) {
  const [cardProducts, setCardProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cardProducts.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) return 0;

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCardProducts([...cardProducts, { id: id, quantity: 1 }]);
    } else {
      setCardProducts(
        cardProducts.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCardProducts(
        cardProducts.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity - 1 } : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCardProducts((cardProducts) =>
      cardProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cardProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  return (
    <CardContext.Provider
      value={{
        items: cardProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CartProvider;

// 3)   export context
