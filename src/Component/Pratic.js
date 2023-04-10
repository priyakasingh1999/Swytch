import { animateScroll } from 'react-scroll';
import Step1 from './Step1';
import Step2 from './Stp2';
import { useState } from 'react';
import MainBody from './MainBody';
import Step3 from './Step3';
import Thankyou from './Thankyou';


const Pratic = ()=>{
    const[show, setShow]=useState([<MainBody/>,<Step1/>,<Step2/>,<Step3/>,<Thankyou/>])
    const [value, setValue] = useState(0);
    return(
        <>
        <div>
        <div className='text-center'>
            <div className='my-3'>
            <button className='btn btn-primary me-2' onClick={()=>{setValue(value-1)}}>prev</button>
            <button className='btn btn-primary ' onClick={()=>{setValue(value+1)}}>next</button>
            </div>
            </div>
            {
                show[value]
            }
            
            
    
        </div>   


        </>
    )
        
}
export default Pratic;