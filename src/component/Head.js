import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiArrowDown} from 'react-icons/hi'

const Head = ({windowsize}) => {
  const [menu, setMenu]= useState(false)
 
  return (
    <div className='h-[650px] relative text-white '>
      <div className=' w-[100%] absolute -z-10 '>

      <img src={require('../img/image-header.jpg')} alt="" className=' object-cover w-[100%]  h-[650px] '/>
      </div>
      <div className='grid grid-cols-2 p-4 relative pt-8 '>
          <div><h1 className='font-bold ml-8 tracking-wider'>sunnyside</h1></div>
          <div>
            {
              windowsize > 820 ?
              <ul className='flex justify-evenly'>
                  <li>About</li>
                  <li>Services</li>
                  <li>Projects</li>
                  <li>Contact</li>
              </ul>
              :
              <div className='absolute right-4'>
                {
                  menu == false ?
                  <GiHamburgerMenu size={25} onClick={()=>setMenu(!menu)} />
                  :<h1 className=' font-[600]  text-xl'>X</h1>
                }

             <div className={menu == true  ? '   fixed left-0 right-0 text-black top-0 bottom-0 ' : 'hidden' }  onClick={()=>setMenu(!menu)} >
              <div className='mt-16 w-[90%] mx-auto border-t-[14px]   border-t-transparent border-r-[14px] border-r-white rounded'>
              <ul className='  text-center bg-white p-4 '>
                  <li className='py-2 px-4 my-1  rounded-full'>About</li>
                  <li className='py-2 px-4 my-1  rounded-full'>Services</li>
                  <li className='py-2 px-4 my-1  rounded-full'>Projects</li>
                  <li className='py-2 px-4 my-1 bg-yellow-100 rounded-full'>Contact</li>
              </ul>  
            </div>
            </div>
            
              </div>
            }
               
          </div>
       
      </div>
      <div className=' text-center text-[50px] font-[900] tracking-wider  font-fraunces uppercase mt-16'><h1>We are creatives</h1></div>
 
    </div>
  )
}

export default Head
