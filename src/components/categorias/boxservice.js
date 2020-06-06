import React, { Component } from 'react'
import Car from '/Users/stanislavpegov/liberameapp1/src/images/calefont10.png'
import {Route, Switch, Link } from 'react-router-dom';

export default class boxservice extends Component {
    render() {
        return (
            
            <Link to='/create'>
            <div style={{
                
                
                
                display: 'inline-block', 
                flexdirection: 'row', 
                marginTop: '50px',
                marginRight: '10px',
                marginLeft: '80px'
               

                    
               
     
                        }}>
                
                <div style={{
                    
                    height: '60px', 
                    width:'168px', 
                    backgroundColor: 'white', 
                    paddingTop: '150px',
                    borderRadius: '15%', 
                    display: 'inline-block', 
                    boxShadow: '0.1px 0.1px 0.1px gray'}}>
           
            <div style={
                
                
                {height: '134px', 
                width:'138px', 
                transform: '180deg',
                backgroundImage:`url(${Car})`, 
                backgroundSize: '100%',
                marginTop: '-130px',
                marginLeft: '15px',
                borderRadius: '15%'}}>

           
           
           
            </div>
            <h2 style={{
                color: 'black', 
                marginLeft: '20px', 
                fontSize: '20px'}}
                
                >    Calefont  </h2>
    </div></div>
    </Link> 
        )
    }
}
