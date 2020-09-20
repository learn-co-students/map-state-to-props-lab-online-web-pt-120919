import React, { Component } from 'react';
import { connect } from 'react-redux'

const User = ({ user }) => {
  return <li><b>Username:</b> {user.username} <b>Hometown:</b> {user.hometown}</li>
}

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>User Count: {this.props.users.length}</p>
          {this.props.users.map(user => <User user={user}/>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
