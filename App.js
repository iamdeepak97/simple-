
import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [Amount,setAmount] = useState()
  const [edit, setedit] = useState(false)
  const [active, setActive] = useState(null)

  const [users, setUsers] = useState([])
  let addUser = (e) => {
    e.preventDefault()
    if (name === '' && email === '' && address === '') {
      alert('You Are Not Entered Details')
    } else {
      const user = {
        name,
        email,
        address,
        Amount
      }
      if (edit) {
        let copy = users;
        Object.assign(copy[active], user)
        setUsers([...copy])
        setedit(false)
        setActive(null)
      } else {
        setUsers([...users, user]);

      }
      setName('')
      setEmail('')
      setAddress('')
      setAmount('')
    }

  }
  //updatee
  let handleOnUpdate = (index) => {
    const user = users[index];
    setedit(true)
    setName(user.name)
    setEmail(user.email)
    setActive(index)
    setAddress(user.address)
    setAmount(user.Amount)
  }

  //delete
  let handleDelete = (user) => {
    if (window.confirm('Are you sure!!!!!!!!')) {
      let copy = users.filter(item => item !== user)
      setUsers([...copy])
    }

  }
  return (
    <>
      <div className='App'>
        <h1 className='text-center'>Simple expense manager</h1>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-sm-10 col-md-8 col-lg-6'>
              <form onSubmit={addUser}>
              <div class="col">
    <label for="inputState" class="form-label">currency Type</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>dollar</option>
      <option>rupees</option>
    </select>
  </div>
  
  
                <div className='form-group'>
                  <label htmlfor="">Name</label>
                  <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                  <label htmlfor="">Email</label>
                  <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                  <label htmlfor="">Address</label>
                  <input type="text" className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className='form-group'>
                  <label htmlfor="">Enter Amount</label>
                  <input type="text" className='form-control' value={Amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className='btn btn-success form-control'>{edit ? "Update" : "Add"}</button>
              </form>
            </div>
          </div>
        </div>
        <table className='table table-bordered mt-5'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              
              <th>Amount</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.Amount}</td>
                  <td>
                    <button className='btn btn-info' onClick={() => handleOnUpdate(index)}>Edit</button>
                  </td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(user)} >delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
