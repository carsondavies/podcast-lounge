import React, { useState } from 'react'
import axios from 'axios'

const Landing = () => {

  const [URL, setURL] = useState('')
  const [video, setVideo] = useState('')

  const handleChange = (e) => {
    setURL(e.target.value)
  }

  const createLounge = (URL) => {
    axios.post('/api/createlounge', { URL })
      //this is where I have to figure out how to generate a component using this function. insert the proper ID into the YT player and use the sockets to line up the video and the chat. maybe using Route to={} to the lounge component, pass the id via props and then start the sockets or whatever.
      .then()
  }


  return (
    <div>
      <input
        name='URL'
        value={URL}
        type='text'
        onChange={handleChange} />
      <button onClick={() => createLounge()}>Generate Lounge</button>
    </div>
  )
}

export default Landing