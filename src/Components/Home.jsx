import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../image/img3.svg"


export const Home = () => {
    return (
        <div>
            <section id="header" className="display">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                    <div className="row d-flex">
                    
                       
                            <div className="col-lg-6 order-2 order-lg-1 align-self-start d-flex flex-column">
                                <h1> Welcome to the world of <strong className="brand-name">SouravTech</strong></h1>
                                <h5 className="my-3">
                                        It is a Responsive WebSite only Using <strong className="brand-name">React.js</strong>
                                </h5>
                                <div className="mt-3 d-flex">
                                <NavLink to="services" className="btn-get-started" role="button" >Get Started</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 align-self-end d-flex ">
                                <img src={web} alt="no img" className="img-fluid animated"/>
                            </div>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </section>

        </div> 
    )
}
