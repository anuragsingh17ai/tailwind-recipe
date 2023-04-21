import React from 'react'

function Login() {
  return (
    <div className='flex justify-center md:justify-end'>
        <a href='#' className='text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white'>Login</a>
        <a href='#' className='text-primary ml-2 btn border-primary md:border-2  hover:bg-primary hover:text-white'>SignUp</a>
    </div>
  )
}

export default Login