import React from 'react'
import { useForm } from '../hooks/useForm'

const RegisterForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    };


    const {values, errors, isSubmitted, handleSubmit, handleChange} = useForm(initialValues);

  return (
    <form>
        {
            Object.values(errors).map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }
        <div>
            <label htmlFor='firstName'>First Name</label>
            <input 
                name='firstName' 
                id='firstName' 
                onChange={handleChange} 
                value={values.firstName}
            />
        </div>
        <div>
            <label htmlFor='lastName'>Last Name</label>
            <input 
                name='lastName' 
                id='lastName' 
                onChange={handleChange} 
                value={values.lastName}
            />
        </div>
        <div>
            <label htmlFor='username'>User Name</label>
            <input 
                name='username' 
                id='username' 
                onChange={handleChange} 
                value={values.username}
            />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input 
                name='email' 
                id='email' 
                onChange={handleChange} 
                value={values.email}
            />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input 
                name='password' 
                id='password' 
                onChange={handleChange} 
                value={values.password}
            />
        </div>
        <button onClick={handleSubmit} disabled={isSubmitted}>Submit</button>
    </form>
  )
}

export default RegisterForm