import React from 'react';

import { useState } from 'react';
// import { findAllInRenderedTree } from 'react-dom/test-utils';
// import { json } from 'react-router-dom';
 function Contact() {
  
    const [userData,setUserData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",

    })

    let name,value;

    function postUserData(e){
        name = e.target.name;
        value = e.target.value;


        setUserData({
            ...userData,
            [name]:value,

        })


   
    }

    // connect To FireBase

 

   async function submitData(e){
    e.preventDefault();
    const {  firstName,
    lastName,
    phone,
    email,
    address,
    message} = userData;


    if(firstName && lastName && phone && email && address &&message){
        
 

    let data = await fetch(`https://reactfirebase-d98ef-default-rtdb.firebaseio.com/userData.json`,{


        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userData)
    }
   );




    if(data){
    alert("Your Form Has Been Submitted")
    setUserData({
        ...userData,
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",

    })
   }
   else{
    alert("Please Enter Valid Detailed")
   }
}
else{
    alert("Please Enter All Details")
   }




    }

  return (
    <>
       
       <section className='contact-section'>

        <div className="container">

            <div className="row">


                <div className=' col-12 col-lg-10 mx-auto'>

                    <div className="row">

                        <div className='contact-leftside col-12 col-lg-5'>

                            <h1 className='fw-bold'>Connect With Our <br/> Sales Team</h1>
                            
                            <p className="main-hero-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Beatae minima odit officia voluptate quo illo quam iusto ipsa debitis 
                                 recusandae doloribus dolor, quaerat aspernatur, 
                                laudantium officiis! Sunt commodi nemo tenetur.
                            </p>

                            <figure>
                                <img className='img-fluid' src="./images/hero1.jpg" alt="" />
                            </figure>




                        </div>

                              {/* Right Side Contact */}


                        <div className="contact-rightside col-12 col-lg-7">

                            <form action="" method='POST'>

                                <div className="row">
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input className='form-control' type="text" required name="firstName"placeholder='Enter Name' value={userData.firstName} onChange={postUserData}/>

                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input className='form-control' type="text" required name='lastName' placeholder='Last Name' value={userData.lastName} onChange={postUserData}/>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input className='form-control' type="phone" required name='phone'  placeholder='Phone No.' value={userData.phone} onChange={postUserData}/>

                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input className='form-control' type="email" required name='email'  placeholder='Email ID' value={userData.email} onChange={postUserData}/>

                                    </div>
                                </div>

                                <div>
                                    <div className="row">
                                        <div className='col-12 '>
                                            <input className='form-control contact-input-field required ' type="text" name='address' placeholder='Add Address' value={userData.address} onChange={postUserData}/>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className='col-12 '>
                                            <input className='form-control contact-input-field' required type="text" name='message'  placeholder='Enter Message' value={userData.message} onChange={postUserData}/>

                                        </div>
                                    </div>
                                </div>

                                <div class="form-check">

                                        <input class="form-check-input form-checkbox-style" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label main-hero-para" for="flexCheckChecked">
                                           I agree that the AhishPay may contact me at the email address or phone number
                                           above
                                        </label>
                                        </div>

                                <button  className='btn btn-style w-100' type="submit" onClick={submitData}>submit</button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>

        </div>

       </section>
      
    </>
  )
}



export default Contact;