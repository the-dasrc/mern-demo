import React from 'react';

const ListUser = ({ users, deleteUser }) => {

  return (
    <ul>
      {
        users &&
          users.length > 0 ?
            (
              users.map(user => {
                return (
                  <li key={user._id} onClick={() => deleteUser(user._id)}>{user.name}</li>
                )
              })
            )
            :
            (
              <li>No user(s) left</li>
            )
      }
    </ul>
  )
}

export default ListUser