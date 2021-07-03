import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
   
    let footStyle={
        position:'relative',
        top:'15vh',
        width:'100%',
        borderRadius:'10px',
        column:'10',
        margin:'auto',
        backgroundColor:"#6c63ff"
        
    }
    let linkstyle={
        color:"white",
        textDecoration:"none"
    }
    return (
        
        <footer className="  text-light  py-3" style={footStyle}>
            <p className="text-center">
                 &copy; <Link style={linkstyle} to="https://souravbose7399.github.io/Project1-React/"> SouravTech.io </Link>
                  3rd July-2021
            </p>


           
        </footer>
    )
}

