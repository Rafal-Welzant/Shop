import { createContext, useContext, useState, useEffect } from 'react';
import { getUsers, postUser } from '../services/users';

const Context = createContext();


export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   getUsers().then(setUsers);
  }, []);

  const addUser = (userData) => {
    return postUser(userData).then(() => {
      setUsers((oldState) => [
        ...oldState,
        {
          id: Date.now(),
          ...userData
        },
      ]);
    })
    
  };

  const removeUser = (userId) => {
    setUsers((users) => {
      return users.filter((user) => {
        return user.id !== userId;
      });
    });
  };

  const updateUser = (userData) => {
    setUsers((users) => {
      return users.map(user => user.id === userData.id ? { ...user, ...userData } : user)
    })
  }

  const getUserById = (userId) => {
    return users.find(user => user.id === userId)
  }

  const value = {
    users,
    addUser,
    removeUser,
    updateUser,
    getUserById
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useUsers = () => {
  return useContext(Context)
}