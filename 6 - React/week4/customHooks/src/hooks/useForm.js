import { useState } from "react";

export const useForm = (initialValue) => {
    
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const validateIsEmpty = (values) => {
    const errors = {};
    for(const [key, value] of Object.entries(values)){
        if(value === "") {
            errors[key] = key + " cannot be empty!"
        }
    }
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateIsEmpty(values));

    if(Object.values(errors).length === 0) {
        setIsSubmitted(true);
    }else{
        setIsSubmitted(false);
        console.log("errors", errors);
    }
}

  return {values, errors, isSubmitted, handleChange, handleSubmit};
};
