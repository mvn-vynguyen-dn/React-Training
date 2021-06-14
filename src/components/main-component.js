import React, { Component } from 'react';
import Cicrle from './circle-component';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  render() {
    const { page }  = this.state;

    return (
      <main className="page-main">
        <div className="main-action">
          <button onClick={() => this.handleChangePage('home')}>Page Home</button>
          <button onClick={() => this.handleChangePage('about')}>Page About</button>
        </div>
        {(page === 'home') &&
        <div className="circles">
          <Cicrle view={{w: 50, height: 50}} number={30}/>
          <Cicrle view={{w: 50, height: 50}} number={50}/>
          <Cicrle view={{w: 50, height: 50}} number={40}/>
        </div>}
        {(page === 'about') && <div>About page</div>}
      </main>
    );
  }
}
export default Main;
