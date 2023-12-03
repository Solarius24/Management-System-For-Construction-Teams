import React from 'react'
import BasicForm from '../components/forms/BasicForm'
import { useParams } from 'react-router-dom';

const FormEdit = (props:any) => {
    let { formRef } = useParams();
   
    //@ts-ignore
    let formData = JSON.parse(localStorage.getItem(formRef))
    console.log(formData)
  return (
    <div>
      <BasicForm formRef = {formRef} formData = {formData.form[0]} />
    </div>
  )
}

export default FormEdit
