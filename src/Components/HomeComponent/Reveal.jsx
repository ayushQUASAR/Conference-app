import React,{useEffect,useRef} from 'react'
import { motion as m,useAnimation,useInView } from "framer-motion"

const Reveal = ({children}) => {
 
    const ref=useRef(null);
    const Isview=useInView(ref);
    const mainControl=useAnimation();
    useEffect(()=>{
       if(Isview){
        mainControl.start('visible');

       }

    },[Isview])

  return (
    <div ref={ref}>
    <m.div 

    variants={{
        hidden:{opacity:0,x:-200},
        visible:{opacity:1,x:0},
    }}
    
    initial='hidden'
    animate={mainControl}
    transition={{duration:1.5}}>

       
            {children}
       
    </m.div>

</div>
  )
}

export default Reveal