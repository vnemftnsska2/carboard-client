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

  const handleCheckBoxChange = e => {
    const { name, checked } = e.target;
    setValues({
      ...values,
      [name]: checked ? 'Y' : 'N'
    })
  }

  return {
    values,
    setValues,
    handleInputChange,
    handleCheckBoxChange
  }
}

export default useForm;