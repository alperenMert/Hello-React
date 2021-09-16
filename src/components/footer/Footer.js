import React, { Component } from 'react'

const footerStyle={
    color:"black",
    backgroundColor:"#00d8ff",
    textAlign:"center",
    padding:"10px",
    fontFamily:"system-ui",
    position:"absolute",
    bottom:"0px",
    left:"10px",
    right:"10px",
    bottom:"-6px",
};

const Footer =()=>{
    return(
        <p style={footerStyle}>
           Created by Alperen MERT 2021
        </p>
    );
};
export default Footer;
