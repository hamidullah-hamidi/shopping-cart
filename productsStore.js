export const productsArray = [
  {
    id: 1,
    title: 'book',
    price: 5,
  },
  {
    id: 2,
    title: 'pen',
    price: 5,
  },
  {
    id: 3,
    title: 'eraser',
    price: 5,
  },
];

export function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log('Not found this product!');
    return undefined;
  }

  return productData;
}
