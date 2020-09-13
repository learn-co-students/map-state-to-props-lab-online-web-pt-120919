import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => (
            <li key={user.username}>
              {user.username} from {user.hometown}
            </li>
          ))}
          <div>{this.props.users.length}</div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(Users);
