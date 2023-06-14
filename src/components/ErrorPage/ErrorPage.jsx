import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_vzj1xd0x.json"
        style={{ height: '500px', width: '400px' }}
        >
        </Player>
        <div className='max-w-md text-center'>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-blue-200 text-gray-900'
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage