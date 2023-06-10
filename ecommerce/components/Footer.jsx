import React from 'react'
import { AiFillAndroid, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p >2023 | HeadMusico | All Rights Reserved</p>
      <p className='icons'>
        <AiFillAndroid href='' />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer