import { useEffect, useState } from 'react';
import Footer from './component/Footer';
import Head from './component/Head'
import Transform from './component/Transform';

function App() {
  const  [windowsize, setWindowsize] = useState({
    windWidth: window.innerWidth
  })
  const getSize = () =>{
    setWindowsize({
      windWidth: window.innerWidth
    })
  }
  useEffect(()=>{
    window.addEventListener('resize', getSize)
    return ()=>{
      window.removeEventListener('resize', getSize)
    }
  }, [windowsize])

  return (
    <div className={windowsize.windWidth > 820 ? "App w-[60%] mx-auto" :"App w-[100%] "}>
    <Head  windowsize={windowsize.windWidth}/>
    <Transform windowsize={windowsize.windWidth}/>
    <Footer windowsize={windowsize.windWidth}  />
    
    </div>
  );
}

export default App;
