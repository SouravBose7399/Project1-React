import React from 'react'
import { NavLink } from 'react-router-dom';



export const Card = (props) => {
    return (
        
            
                    <div className="col-md-4 col-10 mx-auto py-3">

                        <div className="card ">
                            <img src={props.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                    <p className="card-text">{props.desc}</p>
                                    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>

                                </div>
                        
                       
    )
}
