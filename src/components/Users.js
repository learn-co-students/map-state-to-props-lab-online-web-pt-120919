import React, { Component } from 'react';
import {connect} from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users: 
          <ul>
            {this.props.users.map(u => <li>{u.username}</li>)}
          </ul>
          Total Users: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
