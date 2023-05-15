import React from 'react'

const LabelForm = ({labelfor, labelText}) => {
  return (
    <label htmlFor={labelfor}>{labelText}</label>
  )
}

export default LabelForm