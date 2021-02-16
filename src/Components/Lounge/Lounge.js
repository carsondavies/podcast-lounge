import React, { useState } from 'react'
import VideoPlayer from '../VideoPlayer'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
  lounge: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    margin: '40px',
    width: '40%',
    height: '90vh',
  },

  flex: {
    display: 'flex',
    alignItems: 'center'
  },

  chatWindow: {
    position: 'static',
    width: '100%',
    height: '70vh',
    padding: '20px',
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey'
  },

  chatBox: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    width: '85%'
  },

  chatButton: {
    position: 'absolute',
    right: '10px',
    bottom: '10px'
  }

});

const Lounge = () => {

  // const [currentVideo, setCurrentVideo] = useState('')
  const [textValue, changeTextValue] = useState('')
  const [allChats, updateAllChats] = useState([])

  const classes = useStyles()

  return (
    <div className={classes.lounge}>
      <VideoPlayer />
      <Paper className={classes.root}>
        <Typography variant='h4' component='h4'>
          Chat
        </Typography>
        <div className={classes.flex}>
          <div className={classes.chatWindow}>
            {
              [{ from: 'user', msg: 'hello' }].map((chat, i) => (
                <div className={classes.flex}>
                  <Chip label={chat.from} className={classes.chip} key={i} />
                  <Typography variant='p'>{chat.msg}</Typography>
                </div>
              ))
            }
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
          />
          <Button className={classes.chatButton} variant="contained" color="primary">
            Chat
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default Lounge