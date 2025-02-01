import { createContext, useState } from 'react';

// 1)   create context
const CardContext = createContext();

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

// 3)   export context
