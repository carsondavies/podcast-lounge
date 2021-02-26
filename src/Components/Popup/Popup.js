import React, { useState } from 'react'

const Popup = () => {
  const [username, setUsername] = useState('')

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type='text'
        value={username}
        name='username'
        placeholder='enter username' />
      <button>Enter</button>
    </div>
  )
}

export default Popup