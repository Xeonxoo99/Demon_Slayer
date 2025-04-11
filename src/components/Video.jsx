import { useEffect, useState } from 'react'
import video from '../images/video/introVideo.mp4'

function Video() {
  const [fadeOut, setFadeOut] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
  const videoElement = document.querySelector('video')
  document.body.style.overflow = 'hidden'

  const handleEnd = () => {
    setFadeOut(true)
    setTimeout(() => {
      setHide(true)
      document.body.style.overflow = ''
    }, 2000)
  }

  videoElement?.addEventListener('ended', handleEnd)

  return () => {
    videoElement?.removeEventListener('ended', handleEnd)
    document.body.style.overflow = ''
  }
}, [])


  if (hide) return null

  return (
    <section
      className={`fixed top-0 left-0 w-screen h-[920px] overflow-hidden z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <video autoPlay muted className = 'w-full h-full object-cover'>
        <source src={video} type='video/mp4'></source>
      </video>
    </section>
  )
}

export default Video