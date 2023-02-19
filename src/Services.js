import React from 'react'
import serviceapi from './API/serviceApi';
import { useState } from 'react';

 function Services() {

    const [service,setService] = useState(serviceapi)
  return (
    <div>
        <section className="service-main-container">
            <div className='container service-container'>
                <h1 className='main-heading text-center fw-bold'>How To Send Money</h1>

                <div className="row">

                    {

                        service.map((items)=>{
                            return(


                                <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv '>

                                    <i className={`fontstyle ${items.logo}`}></i>
                                    <h2 className='sub-heading'>{items.title}</h2>
                                    <p className='main-hero-para'>{items.info}</p>

                                </div>
                            )
                        })
                    }


                </div>



            </div>
        </section>
      
    </div>
  )
}

export default Services;