import React, { useState } from 'react'

const ThankYou = () => {
  const [variable, setVariable] = useState('')

  const handleChange = (e) => {
    setVariable(e.target.value)
  }


  return (
    <div>
      <input
        type='text'
        name='variable'
        value={variable}
        onChange={handleChange}
        placeholder='thank you here' />
      <button>Enter here</button>
    </div>
  )
}

export default ThankYou