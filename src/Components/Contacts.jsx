import React from 'react'
import  { useState } from 'react'

export const Contacts = () => {

  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    feedback:""
  })

  const InputEvent=(e)=>{
    const{name,value}=e.target

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,

      }
    })
  }

 const formSubmit=(e)=>{
    e.preventDefault();
    alert(`
    Your Name is : ${data.fullname}, 
    You Opinion About Us : "${data.feedback}."
    Your Mobile No. is ${data.phone}. 
    We will Reach You Soon on your mail ${data.email} or
    Your Contact No. 
            Thanks For Help ☺ ❤`)
            
  
}
    return (
       <>
       <div className="my-5">
           <h1 className="text-center">Contact Us</h1>
           <div className="container ">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={formSubmit}>
                   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input
   type="text" 
   class="form-control" 
   id="exampleFormControlInput1"
   name="fullname"
   value={data.fullname}
   onChange={InputEvent}
    placeholder="Enter Your Full Name "/>
</div>
                   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No</label>
  <input 
  type="number"
   class="form-control" 
   id="exampleFormControlInput1" 
   name="phone"
   value={data.phone}
   onChange={InputEvent}
   placeholder="Mobile No."/>
</div>
                   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input 
  type="email"
   class="form-control" 
   id="exampleFormControlInput1" 
   name="email"
   value={data.email}
   onChange={InputEvent}
   placeholder="Enter Your Mail Address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Write Some FeedBack For Us</label>
  <textarea 
  class="form-control"
   id="exampleFormControlTextarea1" 
   name="feedback"
   value={data.feedback}
   onChange={InputEvent}
   rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-success" type="submit">Submit form</button>
  </div>
</form>


                   </div>
               </div>
           </div>
       </div>
       </>
    )
}
