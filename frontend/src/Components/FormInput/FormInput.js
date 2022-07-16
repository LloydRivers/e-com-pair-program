import React from 'react'
import { FormContainer , Input , Label } from './FormInput.style'
const FormInput = ({label, ...otherProps}) => {
  return (
  <FormContainer>
          <label>{label}</label>
          <Input
              {...otherProps}/>


  </FormContainer>
  )
}

export default FormInput