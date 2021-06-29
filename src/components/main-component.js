import React, { Component } from 'react';
// import Cicrle from './circle-component';
import UserItem from './user-item.component';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      form: {
        email: '',
        password: '',
        country: '',
        infor: '',
        gender: '0'
      },
      userList: [],
      id: 1
    };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  handleInputChanges = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prev => {
      return {
        form: {
          ...prev.form,
          [name]: value
        }
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prev => {
      return {
        id: prev.id += 1,
        userList: [
          ...prev.userList,
          {...this.state.form, id: this.state.id}
        ]
      }
    })
  }

  deleteItem = (id) => {
    this.setState(prev => {
      return {
        ...prev,
        userList: prev.userList.filter(item => item.id !== id)
      }
    })
  }

  render() {
    const { userList }  = this.state;

    const listUsers = userList.map((item) => {
      return <UserItem infor={item} key={item.id} parentCallback={this.deleteItem}/>
    })

    return (
      <main className="page-main">
        <div className="container">
          <div className="form-wrap">
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input type="text" name="email" onChange={this.handleInputChanges}/>
              <label>Password</label>
              <input type="password" name="password" onChange={this.handleInputChanges}/>
              <label>Your Country</label>
              <select name="country" value={this.state.form.country} onChange={this.handleInputChanges}>
                <option value="">Please Choose</option>
                <option value="vn">Viet Nam</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
              </select>
              <label>Gender</label>
              <input type="radio" id="male" name="gender" value="0" onChange={this.handleInputChanges} defaultChecked/>
              <label className="custom-label" htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="1" onChange={this.handleInputChanges}/>
              <label className="custom-label" htmlFor="female">Female</label>
              <div>
                <label>Other information</label>
                <textarea name="infor" onChange={this.handleInputChanges}></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
          <div className="table-wrap">
            <table id="customers">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Country</th>
                  <th>Infor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listUsers}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="main-action">
          <button onClick={() => this.handleChangePage('home')}>Page Home</button>
          <button onClick={() => this.handleChangePage('about')}>Page About</button>
        </div>
        {(page === 'home') &&
        <div className="circles">
          <Cicrle view={{width: 50, height: 50}} number={30}/>
          <Cicrle view={{width: 50, height: 50}} number={50}/>
          <Cicrle view={{width: 50, height: 50}} number={40}/>
        </div>}
        {(page === 'about') && <div>About page</div>} */}
      </main>
    );
  }
}
export default Main;
