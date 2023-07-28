import React from 'react'
import { useFormInput } from '../hooks/useFormInput'

const Form = () => {
    const firstNameProps = useFormInput("Kubilay");
    const lastNameProps = useFormInput("Cakmak");

    
  return (
    <div>
        <label htmlFor="firstName">First Name</label>
        <input name='firstName' id='firstName' {...firstNameProps} />

        <label htmlFor="lastName">Last Name</label>
        <input name='lastName' id='lastName' {...lastNameProps} />

        <h5>
            {firstNameProps.value}
        </h5>

        <h5>
            {lastNameProps.value}
        </h5>
    </div>
  )
}

export default Form