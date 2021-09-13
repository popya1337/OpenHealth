import React, {useState} from 'react';
import {UserForm} from 'components/UserForm'
import {UserList} from 'components/UserList'
const  App = () => {
  const [users, setUsers] = useState([])

  const addUser = (newUser) => {
    setUsers([...users, newUser])
  }

  const deleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId))
  }

  console.log(users)
  return (
    <div style={{display:'flex', justifyContent: 'center', padding: 50}}>
      <div style={{flex: 1, display:'flex', justifyContent: 'center'}}>
        <UserForm handleAddUser={addUser}/>
      </div>

      <div style={{flex: 1}}>
        <UserList users={users} handleDeleteUser={deleteUser}/>
      </div>
    </div>
  );
}

export default App;
