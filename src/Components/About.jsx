import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../image/imgAbout.svg"


export const About = () => {
    return (
        <div>
             <h1 className="text-center py-3">About Us</h1>
            <section id="header" className="display">
               
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                    <div className="row d-flex">
                    
                       
                            <div className="col-lg-6 order-2 order-lg-2 align-self-start d-flex flex-column">
                                <h1> Lorem ipsum dolor sit. <strong className="brand-name">SouravTech</strong></h1>
                                <h5 className="my-3">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laboriosam.<strong className="brand-name">React.js</strong>
                                </h5>
                                <div className="mt-3 d-flex">
                                <NavLink to="contact" className="btn-get-started" role="button" >Contact Us</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-1 align-self-end d-flex ">
                                <img src={web} alt="no img" className="img-fluid animated2"/>
                            </div>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </section>

        </div> 
    )
}
