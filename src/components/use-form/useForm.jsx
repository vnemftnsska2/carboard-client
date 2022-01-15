import { useState, } from 'react';

const useForm = (initialFormValues) => {
  const [values, setValues] = useState(initialFormValues);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return {
    values,
    setValues,
    handleInputChange
  }
}

export default useForm;