import React from 'react'
import ChildComponentB from './ChildComponentB'

const ChildComponentA = ({ inputValue, setInputValue }) => {
  return (
    <div>ChildComponentA
      <br />
      {inputValue}
      <ChildComponentB
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </div>
  )
}

export default ChildComponentA