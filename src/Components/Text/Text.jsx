import React from 'react'
import './text.css'
const Text = () => {
  return (
    <div>
        <p className='video-tittle'>Talking Tech and AI with Google CEO Sundar Pichai!</p>
        <p className='video-stats'>3.4M views &#183; 6 months ago</p>
        <p className='video-author'>Marques Brownlee &#10003;</p>
        <p className='video-description'>Talking tech and AI on the heels of Google I/O. Also a daily driver phone reveal from Google's CEO. Shoutout to Sundar!</p>

        <p className='apple-text'>Shop early for the best selection of holiday favourites.<span className='span-example'>Shop now {`>`}</span> </p>
    </div>
  )
}

export default Text