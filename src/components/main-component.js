import React, { Component } from 'react';
import Item from './item-note-component';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      list: [
        {
          id: 1,
          title: 'This is title 1',
          des: 'This is des 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          color: '#f23d49'
        },
        {
          id: 2,
          title: 'This is title 2',
          des: 'This is des 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          color: '#dcbd25'
        },
        {
          id: 3,
          title: 'This is title 3',
          des: 'This is des 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          color: '#0b5e19'
        },
        {
          id: 4,
          title: 'This is title 4',
          des: 'This is des 4, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          color: '#165087'
        },
        {
          id: 5,
          title: 'This is title 5',
          des: 'This is des 5, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          color: '#0e65c1'
        }
      ]
    };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  deleteItem = (id) => {
    this.setState(prev => {
      return {
        ...prev,
        list: prev.list.filter(item => item.id !== id)
      }
    })
  }

  render() {
    const { list }  = this.state;
    const listItems = list.map((item) => {
      return <Item infor={item} key={item.id} parentCallback={this.deleteItem}/>
    })
    return (
      <main className="page-main">
        <div className="page-list">
          {listItems.length ? listItems : 'No item to show'}
        </div>
      </main>
    );
  }
}
export default Main;
