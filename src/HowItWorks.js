import React from 'react'
import workapi from './API/workApi'; 
import { useState } from 'react';

 function HowItWorks() {

    const [workData,setWorkData] = useState(workapi)
  return (
    <>

    <section>
        <div className="work-container container">

            <h1 className=' main-heading text-center '>How Does It Works</h1>
            <div className="row">

                {
                    workData.map((items)=>{
                        return(

                            <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                            <i class={`fontstyle ${items.logo}`}></i>
                            <h2 className='sub-heading'>{items.title}</h2>
        
                            <p className='main-hero-para w-100'> {items.info}
                                
                               </p>
        
                        </div>


                        )
                    })
                }
             
            </div>


        </div>
    </section>

      
    </>
  )
}

export default HowItWorks;
