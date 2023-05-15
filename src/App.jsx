import Title from "./components/Title"
import LabelForm from './components/LabelForm'
import { useState } from 'react'
import {BsTrash3Fill } from "react-icons/bs"


const App = () => {
  const [Employes, setEmployes] = useState([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const AddEmploye = () => {
    const newEmploye = {
      id: Math.random(1, 10),
      fname: fname,
      lname: lname,
      email: email,
      phone: phone
    }
    setEmployes([...Employes, newEmploye])
    clearText()
  }

  const deleteEmploye = (id) => {
    const newList = Employes.filter((Employe) => Employe.id !== id)
    setEmployes(newList)
    console.log(newList)
  }


  const clearText = () => {
    setFname('')
    setLname('')
    setEmail('')
    setPhone('')
  } 

  return (
    <div className="container my-4">

      {/* Title */}

      <Title />

      {/* First Name */}


      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="fname"
          labelText="First name"
        />

        <input
          type="text"
          placeholder="your first name"
          className="form-control mt-1"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      {/* Last Name */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="lname"
          labelText="Last name"
        />
        <input
          type="text"
          value={lname}
          className="form-control mt-1"
          placeholder="your last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      {/* Email */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
        
          labelfor="email"
          labelText="email"
        />
        <input
          type="email"
          value={email}
          placeholder="your email"
          className="form-control mt-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>


      {/* Phone number */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <LabelForm
          labelfor="Phone"
          labelText="Phone"
        />
        <input
          type="number"
          value={phone}
          placeholder="+21236767687"
          className="form-control mt-1"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>


      {/* Submit Button */}

      <div className="form-group mt-2 p-2 col-md-6 mx-auto">
        <button className="btn btn-dark w-100 mt-2" onClick={() => AddEmploye()}>Add Employe</button>
      </div>


      {/* Table */}

      <table className='table mt-4 w-75 mx-auto'>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            Employes.map((Employe, index) => (
              <tr key={index}>
                <td>{Employe.fname}</td>
                <td>{Employe.lname}</td>
                <td>{Employe.email}</td>
                <td>{Employe.phone}</td>
                <td>
                  {/* <button className="btn btn-warning" onClick={() => editEmploye(Employe
                    .id)}><BsPenFill /></button> */}
                  
                  <button className="btn btn-danger m-1 "  onClick={() => deleteEmploye(Employe.id)}><BsTrash3Fill /></button>
                </td> 
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  )
}

export default App