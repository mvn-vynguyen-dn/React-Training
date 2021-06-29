import React, { Component } from 'react';

class UserItem extends Component {

  handleDeleteItem(id) {
    this.props.parentCallback(id);
  }

  render() {
    const { infor } = this.props

    return (
      <tr>
        <td>{ infor.email }</td>
        <td>{ infor.gender === '0' ? 'Male' : 'Female' }</td>
        <td>{ infor.country }</td>
        <td>{ infor.infor }</td>
        <td>
          <span onClick={() => this.handleDeleteItem(infor.id)}>x</span>
        </td>
      </tr>
    );
  }
}
export default UserItem;