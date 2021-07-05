import React, { useState } from "react";
// import Cicrle from './circle-component';
import UserItem from './user-item.component';
export function Main() {
  const [state, setState] = useState(
    {
      email: '',
      password: '',
      country: '',
      infor: '',
      gender: '0',
      userList: [],
      id: 0
    },
  )

  function handleInputChanges(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState((state) => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setState((state) => {
      return {
        id: state.id += 1,
        userList: [
          ...state.userList,
          {...state, id: state.id}
        ]
      }
    })
  }

  function deleteItem(id) {
    setState((state) => ({
      userList: state.userList.filter((item) => item.id !== id)
    }))
  }

  const listUsers = state.userList.map((item) => {
    return <UserItem infor={item} key={item.id} parentCallback={deleteItem}/>
  })

    return (
      <main className="page-main">
        <div className="container">
          <div className="form-wrap">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="text" name="email" onChange={handleInputChanges}/>
              <label>Password</label>
              <input type="password" name="password" onChange={handleInputChanges}/>
              <label>Your Country</label>
              <select name="country" value={state.country} onChange={handleInputChanges}>
                <option value="">Please Choose</option>
                <option value="vn">Viet Nam</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
              </select>
              <label>Gender</label>
              <input type="radio" id="male" name="gender" value="0" onChange={handleInputChanges} defaultChecked/>
              <label className="custom-label" htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="1" onChange={handleInputChanges}/>
              <label className="custom-label" htmlFor="female">Female</label>
              <div>
                <label>Other information</label>
                <textarea name="infor" onChange={handleInputChanges}></textarea>
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
export default Main;
