import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListUser from './ListUser';

class User extends Component {

  state = {
    users: []
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    axios.get('/api/get-all')
      .then(res => {
        if(res.data){
          this.setState({
            users: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteUser = (id) => {

    axios.delete(`/api/user/${id}`)
      .then(res => {
        if(res.data){
          this.getUsers()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { users } = this.state;

    return(
      <div>
        <h1>My User(s)</h1>
        <Input getUsers={this.getUsers}/>
        <ListUser users={users} deleteUser={this.deleteUser}/>
      </div>
    )
  }
}

export default User;