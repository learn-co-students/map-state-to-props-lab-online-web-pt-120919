import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map((user, index) => 
            <li key={index}>{user.username}</li>)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(Users)
