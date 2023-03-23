import React from 'react';
import Adduser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from '@firebase/firestore';

function App() {
  // const [usersList, setusersList] = useState([]);
  // ----------------------------------------------
  const [users, setUsers] = useState([]);

  // Connecting to a Particular Collection in Firestore
  const userCollectionRef = collection(db, "userDetails");

  // Function to get data from database into the users useStae variable
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  }

  // Function to get data from database into the users useStae variable
  const createUser = async (userName, userAge) => {
    await addDoc(userCollectionRef, { name: userName, age: userAge });
  }

  // Function to update data from database 
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "userDeatils", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "userDeatils", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    getUsers();

  });
  // --------------------------------------------------------------------
  function addUserHandler(userName, userAge) {
    createUser(userName, userAge);
    setUsers((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge }];
    });
  }

  function updateUserHandler(id, age){
    updateUser(id, age);
    console.log("updateUserHandler executed")
    getUsers();
  }

  function deleteUserHandler(id){
    deleteUser(id);
    console.log("deleteUserHandler executed")
    getUsers();
  }

  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UserList onDelete={deleteUserHandler} onUpdate={updateUserHandler} users={users} />
    </div>
  );
}

export default App;
