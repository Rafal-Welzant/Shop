const API =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const getUsers = () => {
  return fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server error")
      }).then(users => users.map(({ address, ...user }) => {
        return {
          ...user,
          city: address.city
        }
      }))
}

export const postUser = ({ city, ...user }) => {
  return fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...user, address: { city }}) })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server error")
      })
}