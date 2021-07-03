import React from 'react'
import {Card }from './Card';
import  CardData  from "./CardData";

export const Services = () => {
    return (
        <div>
            <h1 className="text-center">Services </h1>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                <div className="row">
                    {
                        CardData.map((val,ind)=>{
                            return <Card
                            key={ind}
                            img={val.imgsrc}
                            title={val.title}
                            desc={val.desc}
                            />
                        })
                    }

           
           </div>
                    </div>
                </div>
        </div>
            </div>
            )
}
