import React, { Component } from 'react'
import Car1 from '../images/chile.png'
import Car2 from '../images/whatsapp-2.png'
import Car3 from '../images/messenger.png'
import Car4 from '../images/facebook.png'
import Car5 from '../images/instagram.png'


export default class footer extends Component {
  render() {
    return (
      <div style={{height: '180px', backgroundColor: 'black', margintop: ''}}>
        


      <div style={{height: '70px', backgroundColor: 'white', borderTop: '1.4px solid #eef3f4', marginTop: ''}}>


      <p style={{color: 'black', marginTop: '24px',marginLeft: '475px', fontSize: '20px',position: 'absolute', fontFamily:''}}>Atendemos todas las comunas de la RM</p>
      <div style={{height: '35px', width:'35px', backgroundImage:`url(${Car1})`, backgroundSize: '100%',marginTop: '20px',marginLeft: '420px',borderRadius: ''}}> 
      </div>
      
      


      </div>
     
      <h1 style={{fontSize: '17px', marginTop: '30px', marginLeft: '30px',color: 'white'}}>Únete al club</h1>
      <p style={{ fontSize: '14px',marginLeft: '30px', color: 'white'}}>Suscríbete a nuestro boletín.</p>
      
      
      
      
      </div>
    )
  }
}
