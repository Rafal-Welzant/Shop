const API = "https://fakestoreapi.com/products?limit=12";

export const getProducts = () => {
  return fetch(API)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Bad response')
    })
}