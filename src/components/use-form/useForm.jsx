import { useState, } from 'react';
import dayjs from "dayjs";

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

  const isNumberAndPositive = (value) => {
    const numberRegEx = new RegExp(/[0-9]g/);
    if (value >= 0 || numberRegEx.test(value)) {
        return true; // undefined, 양수만 허용 (문자열 비허용)
    }
    return false;
}

  const handleCurrencyChange = e => {
    const { name, value } = e.target;
    let currencyValue = value.replace(/,/gi, '');
    if (!currencyValue || !isNumberAndPositive(currencyValue)) {
      currencyValue = 0;
    }

    setValues({
      ...values,
      [name]: parseInt(currencyValue).toLocaleString('ko-KR'),
    })
  }

  const handleFileUpload = e => {
    const { name, files } = e.target;
    setValues({
      ...values,
      [name]: files[0],
    });
  };

  const handleDatePicker = value => {
    const date = value ? dayjs(value).format('YYYY-MM-DD') : '';
    setValues({
      ...values,
      delivery_date: date,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
    isNumberAndPositive,
    handleCheckBoxChange,
    handleCurrencyChange,
    handleFileUpload,
    handleDatePicker,
  }
}

export default useForm;