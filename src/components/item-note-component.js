import React, { Component } from 'react';

class Item extends Component {

  handleDeleteItem(id) {
    this.props.parentCallback(id);
  }

  render() {
    const { infor } = this.props
    const style = {
      background: infor.color
    }

    return (
      <div className="item">
        <div className="item-left" style={style}></div>
        <div className="item-content">
          <h3 className="content-title">
            { infor.title }
          </h3>
          <p className="content-description">
            { infor.des }
          </p>
        </div>
        <div className="item-action">
          <span className="action-delete" onClick={() => this.handleDeleteItem(infor.id)}>x</span>
        </div>
      </div>
    );
  }
}
export default Item;
