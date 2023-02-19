import React from 'react'

 function Header() {
  return (
    <div>

        <header>


            <section className="container main-hero-container ">

                <div className="row">

                    <div className='col-12 col-md-6 col-lg-6 header-left-side d-flex justify-content-center  flex-column align-items-start 
                    order-lg-first order-last'>

                        <h1 className='display-2'>Online Payment Made <br /> Easy For You..! </h1>

                        <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quas, autem ipsam iusto nam, quos fugit temporibus perspiciatis
                             ipsum nihil dolorem ut aut! Soluta ipsam numquam reiciendis. Aperiam 
                             debitis sint similique consequatur repellat odit?
                             
                       </p>

                       <h3>Get Easly Access For You</h3>

                                  <div className="input-group mt-3 ">

                                    <input type="text" placeholder='Enter Your Email' className='rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text' />

                                    <div  className='input-group-button '>Get Now</div>

                                 </div>



                    </div>



                        {/* main header right */}

                    <div className='col-12 col-md-6 col-lg-6 header-right-side  d-flex justify-content-center align-items-center main-hero-section-images 
                    order-md-first order-sm-first'>

                        <img className='img-fluid' src="./images/hero1.jpg" alt="headerImg" />
                        <img className='img-fluid main-hero-img2' src="./images/hero4.jpg" alt="headerImg4" />



                    </div>
  


                </div>

            </section>
        </header>
      
    </div>
  )
}

export default Header
