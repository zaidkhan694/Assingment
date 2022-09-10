import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Banner() {
  return (
    <>
    <div className="container my-5">
    <div className="row">
    <div className="col">
        <h1 className='font-bold'>
        We find the best doctors for your health for your health in area
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="col">
    <button className='btn btn-success'>Book Now</button>
    </div>
    </div>
    </div>
    {/* <div className=" container my-5">
        <h1>
            We find the best doctors for your health for your health in area
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button className='btn btn-success'>Book Now</button>
        </div> */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className=" container my-3 carousel-inner ">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1662749733~exp=1662750333~hmac=f080f3ee72cae33e9a7836ea25566c9657e8ce78cbba33dcb361899735a4fc76" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1662749733~exp=1662750333~hmac=f080f3ee72cae33e9a7836ea25566c9657e8ce78cbba33dcb361899735a4fc76" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=826&t=st=1662749733~exp=1662750333~hmac=f080f3ee72cae33e9a7836ea25566c9657e8ce78cbba33dcb361899735a4fc76" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col">
      <h1 className='font'>Amazon</h1>
    </div>
    <div className="col">
    <h1 className='font'>Google</h1>
    </div>
    <div className="col">
    <h1 className='font'>Microsoft</h1>
    </div>
    <div className="col">
   <h1 className='font'>Netflix</h1>
    </div>
  </div>
</div>

<div className="container my-5">
<div className="row">
    <div className=" container col">
   <h3 className='font-bold'>Why People Choose Us</h3>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className="col">
    <div class="container">
  <div class="row row-cols-2 mx-1">
    <div class="grid1 col my-1">
        <h7 className="font">Always Online Service</h7>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="col my-1"><h7 className="font">Easy Make Appointments</h7>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
    <div class="col my-1"><h7 className='font'>Instance Medicine</h7>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
    <div class="col my-1"><h7 className='font'>Always Doctor</h7>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
  </div>
</div>
    </div>
</div>
</div>
<div className="container my-5">
    <div className="row">
    <div className="col">
        <h1 className='font-bold'>
        Our High Qualified Doctors
        </h1>
    </div>
    <div className="col">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, recusandae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis!</p>
    </div>
    </div>
    </div>
</>
  )
}

export default Banner