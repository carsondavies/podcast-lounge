import React, { useState } from 'react'
import VideoPlayer from '../VideoPlayer'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles({
  lounge: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    margin: '40px',
    width: '40%',
    height: '90vh',
  },

  flex: {
    display: 'flex'
  },

  chatWindow: {
    width: '90%',
    height: '70%'
  },

  chatBox: {

  },

  chatButton: {

  }

});

const Lounge = () => {

  const [currentVideo, setCurrentVideo] = useState('')

  const classes = useStyles()

  return (
    <div className={classes.lounge}>
      <VideoPlayer currentVideo={currentVideo} />
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

        </div>
      </Paper>
    </div>
  )
}

export default Lounge