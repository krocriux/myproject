import React, { Component } from 'react'
import Car from '../images/a1.png'
import Car1 from '../images/a9.png'
import Car2 from '../images/a8.png'
import Car3 from '../images/a7.png'
import Text4 from './text4'

export default class boxservice extends Component {
    render() {
        return (
            
            <div style={{height: '134px', width:'134px',display: 'inline-block', flexdirection: 'row',marginLeft: '40px', }}   >
                
               
                <div style={{height: '280px', width:'220px', backgroundImage:`url(${Car1})`, backgroundSize: '100%',marginTop: '50px',marginLeft: '35px',borderRadius: '',boxShadow: '0.1px 0.1px 0.1px gray'}}> 
                
                <div style={{height: '280px', width:'220px', backgroundImage:`url(${Car2})`, backgroundSize: '100%',marginTop: '50px',marginLeft: '425px',borderRadius: ''}}>  
            <div style={{height: '275px', width:'220px', backgroundImage:`url(${Car})`, backgroundSize: '100%',marginTop: '50px',marginLeft: '395px'}}>
            

           
           
           
         
           
           </div>
    </div>
    </div>
    </div>
        )
    }
}
