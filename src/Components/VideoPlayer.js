import React from 'react'
import Youtube from 'react-youtube'

class VideoPlayer extends React.Component {
  render() {
    const opts = {
      height: '300vh',
      width: '90%',
      playerVars: {
        autoplay: 1,
      }
    }
    return <Youtube videoId={this.props.currentVideo} opts={opts} onReady={this._onReady} />
  }

  _onReady(event) {
    event.target.pauseVideo()
  }
}

export default VideoPlayer