import React from 'react'
import { useForm } from '../hooks/useForm'

const LoginForm = () => {

    const initialValues = {
        email: "",
        password: ""
    };


    const { values, errors, isSubmitted, handleChange, handleSubmit } = useForm(initialValues);

  return (
    <form>
        {
            Object.values(errors).map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }
        <div>
            <label htmlFor="email">Email:</label>
            <input 
                id='email' 
                type="email" 
                name='email' 
                onChange={handleChange}
                value={values.email}
                placeholder='abc@example.com'
            />
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input 
                id='password' 
                type="email" 
                name='password' 
                onChange={handleChange}
                value={values.password}
            />
        </div>
        <div>
            <button onClick={handleSubmit} disabled={isSubmitted}>Submit Form</button>
        </div>
    </form>
  )
}

export default LoginForm