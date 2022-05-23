import React from 'react'

const Transform = ({windowsize}) => {
  return (
      <>
    <div className={ windowsize > 375 && 'grid grid-cols-2 h-[325px]'}>
        <div className=' order-2'>
          <img src={require('../img/image-transform.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full   h-[325px]'/>
      </div>

      <div className=' order-1 p-8  h-[325px]'>
          <h1 className=' text-lg text-center font-bold mt-8'>Transform your brand</h1>
          <p className=' text-xs text-center mt-4'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <p href="#" className=' text-md uppercase text-center font-bold mt-8'>learn more</p>
      </div>
    
    </div>


    <div className={ windowsize >375 && 'grid grid-cols-2 h-[325px]'}>
        <div className=' order-1 '>
          <img src={require('../img/image-stand-out.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[325px]'/>
      </div>

      <div className=' order-2 p-8'>
          <h1 className=' text-lg text-center font-bold mt-8'>Stand out to the right audience </h1>
          <p className=' text-xs text-center mt-4'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <p href="#" className=' text-md uppercase text-center font-bold mt-8'>learn more</p>
      </div>
    
    </div>


    <div className={ windowsize >375 && 'grid grid-cols-2 h-[325px] text-sm'}>
        <div className=' order-1 relative '>
          <img src={require('../img/image-graphic-design.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[325px]'/>
          <div className="absolute bottom-0">
            <h1 className=' text-md uppercase text-center font-bold '>Graphic design </h1>
            <p  className=' text-xs text-center my-4 px-8'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
      </div>

       <div className=' order-1 relative'>
          <img src={require('../img/image-photography.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[325px]'/>
          <div className="absolute bottom-0">
        <h1 className=' text-md uppercase text-center font-bold '>Photography</h1>
        <p className=' text-xs text-center my-4 px-8'> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
      </div>
    
    </div>


    <div className=' p-4'>
      <h1 className='text-center tracking-widest font-semibold  mx-10 opacity-50 my-8 uppercase'>Client testimonials</h1>
      <div className={ windowsize >375 && 'grid grid-cols-3 h-[325px] text-sm'}>
        <div>
          <div className='w-20 h-20 rounded-full overflow-hidden mx-auto my-4'>

        <img src={require('../img/image-emily.jpg')} alt="" srcset="" className=' '/>
          </div>
        <p className='text-center text-xs mx-10'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
        <h1 className='text-center font-bold mt-8 mx-10'>Emily R.</h1>
        <p className='text-center text-xs mx-10 opacity-50'>Marketing Director</p>
        </div>
        <div>
          <div className='w-20 h-20 rounded-full overflow-hidden mx-auto my-4'>

        <img src={require('../img/image-thomas.jpg')} alt="" srcset="" className=' '/>
          </div>
        <p className='text-center text-xs mx-10'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. </p>
        <h1 className='text-center font-bold mt-8 mx-10'>Thumas S.</h1>
        <p className='text-center text-xs mx-10 opacity-50'>Chief Operating Officer</p>
        </div>
        <div>
          <div className='w-20 h-20 rounded-full overflow-hidden mx-auto my-4'>

        <img src={require('../img/image-jennie.jpg')} alt="" srcset="" className=' '/>
          </div>
        <p className='text-center text-xs mx-10'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! </p>
        <h1 className='text-center font-bold mt-8 mx-10'>Jennie F.</h1>
        <p className='text-center text-xs mx-10 opacity-50'> Business Owner </p>
        </div>
      </div>
    </div>


    <div className={ windowsize >375 ? 'grid grid-cols-4 ': 'grid grid-cols-2  '}>
        

       <div className='  '>
          <img src={require('../img/image-gallery-milkbottles.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[200px]'/>
        
      </div>
       <div className='  '>
          <img src={require('../img/image-gallery-orange.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[200px]'/>
        
      </div>
       <div className='  '>
          <img src={require('../img/image-gallery-cone.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[200px]'/>
        
      </div>
       <div className='  '>
          <img src={require('../img/image-gallery-sugarcubes.jpg')} alt="" srcset="" className=' object-cover shrink-0 w-full  h-[200px]'/>
        
      </div>
    
    </div>
      </>
  )
}

export default Transform
