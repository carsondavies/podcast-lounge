import React, { useState } from 'react'

const Header = () => {

  const [variable, setVariable] = useState('')

  const handleChange = (e) => {
    setVariable(e.target.value)
  }

  return (
    <div>
      <p>WELCOME TO PODCAST LOUNGE</p>
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

export default Header