import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Text3 from './text3'
import Notificaciones from './notificaciones'
import Text4 from './text4'

export default function SimpleContainer() {
  return (
    
    <React.Fragment>
      
      
      <div style={{marginTop: '-20px', height: '400px', backgroundColor: '#F6F8FD'}}> 
      
      <Container >
      
      <div component="div" style={{backgroundSize:'100%', backgroundImage:'#F6F8FD',width: '100%',backgroundrepeat: 'no-repeat'}}>
      
     
      
      <Text3></Text3>
      
      <Notificaciones>

      <Text4></Text4>

      </Notificaciones>

     
      
    
      
    
    
    
      </div>

      
      
    </Container></div>
      
    </React.Fragment>
  );
}
