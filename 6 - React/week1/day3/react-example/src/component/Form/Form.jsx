import React, { useState } from 'react'
import './Form.scss'

const Form = () => {
//   const [email, setEmail] = useState('abc');
//   const [password, setPassword] = useState('');
//   const [bio, setBio] = useState("");
//   const [car, setCar] = useState("mercedes");
//   const [terms, setTerms] = useState(false);
//   const [gender, setGender] = useState("");

//   const handleEmailChange = (event) => {
//     console.log(event.target.value);
//     setEmail(event.target.value);
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   }

//   const handleBioChange = (event) => {
//     setBio(event.target.value);
//   }

//   const handleCarChange = (event) => {
//     setCar(event.target.value);
//   }

//   const handleTermsChange = (event) => {
//     setTerms(!terms);
//   }

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   }

const [formData, setFormData] = useState({
    email: 'iwkfurheyehdhetsd',
    password: '',
    bio: '',
    car: '',
    terms: false,
    gender: ''
  });

  const handleChanges = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={handleChanges} name='email' value={formData.email} type="email" id="exampleInputEmail1"/>
        </div>  
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input  onChange={handleChanges} name='password' value={formData.password} type="password" id="exampleInputPassword1"/>
        </div>

        <div className='form-group'>
            <label htmlFor="exampleFormControlSelect1">Bio</label>
            <textarea  onChange={handleChanges} name='bio' defaultValue={formData.bio} id="exampleFormControlSelect1"></textarea>
        </div>

        <div className='form-group'>
            <label htmlFor="exampleFormControlSelect2">Select a car</label>
            <select onChange={handleChanges} name='car' value={formData.car} className="form-control" id="exampleFormControlSelect2">
                <option value={"volvo"}>Volvo</option>
                <option value={"mercedes"}>Mercedes</option>
                <option value={"audi"}>Audi</option>
            </select>
        </div>

        <div className='form-group'>
            <input onChange={handleChanges} name='terms' checked={formData.terms} type="checkbox" id="exampleFormControlSelect3"/>
            <label htmlFor="exampleFormControlSelect3">I agree to the terms and conditions</label>
        </div>

        <div className='form-group'>
            Gender: 
            <label htmlFor="exampleFormControlSelect4">
                <input onChange={handleChanges} value={"male"} type="radio" name="gender" id="exampleFormControlSelect4" />
                Male
            </label>
            <label htmlFor="exampleFormControlSelect5">
                <input onChange={handleChanges} value={"female"} type="radio" name="gender" id="exampleFormControlSelect5" />
                Female
            </label>
        </div>

        <button onClick={handleSubmit} type="submit" >Submit</button>

        <div>
            <p>{formData.email}</p>
            <p>{formData.password}</p>
            <p>{formData.bio}</p>
            <p>{formData.car}</p>
            <p>{formData.terms.toString()}</p>
            <p>{formData.gender}</p>
        </div>
    </form>
  )
}

export default Form

// ----------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9,10];
// // arr.push(11); // mutates the array, muitable method

// arr = [...arr, 11]; // immutable method

// // objects

// let obj = {
//     name: 'John',
//     age: 30
// }

// obj.name = "jane"; // mutates the object, muitable method

// obj = {
//     ...obj,
//     name: 'jane'
// } // immutable method

// ----------------------------------------------------

// type === 'checkbox' ? checked : value, //ternary operator

// if(type === 'checkbox'){ // if statement
//     return checked;
// } else {
//     return value;
// }