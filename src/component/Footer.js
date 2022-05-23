import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' p-8 bg-Dark-moderate-cyan font-base'>
      <h1 className='font-bold text-lg text-center tracking-wider my-4'>sunnyside</h1>
      <ul className='flex  gap-8 justify-evenly '>
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
      </ul>
      <div className='flex  justify-evenly mt-16'>
          <div><FaFacebookSquare/></div>
          <div><FaInstagram/></div>
          <div><FaTwitter/></div>
          <div><FaPinterestP/></div>
      </div>
    </div>
  )
}

export default Footer
