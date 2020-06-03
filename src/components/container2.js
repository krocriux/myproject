import React from 'react';

import Text2 from './text2'
import Boxservice from './categorias/boxservice'
import Boxservice2 from './categorias/boxservice2'
import Boxservice3 from './categorias/boxservice3'
import Boxservice4 from './categorias/boxservice4'
import Boxservice5 from './categorias/boxservice5'
import Boxservice6 from './categorias/boxservice6'
import Boxservice7 from './categorias/boxservice7'
import Boxservice8 from './categorias/boxservice8'
import Boxservice9 from './categorias/boxservice9'
import Boxservice10 from './categorias/boxservice10'
import Boxservice11 from './categorias/boxservice11'

export default function SimpleContainer() {
  return (
    
    <React.Fragment>
      <div />
      <div style={{marginTop: '-10px', height: '600px', backgroundColor: '#FAFAF8', width: 'auto'}}> 
      <div>
      
      <div component="div" style={{marginTop: '-15px', backgroundImage:'#F2F2F2',height: '780px',width: 'auto'}}>
      
     
      
      <Text2></Text2>
     
    <Boxservice ></Boxservice> 
    <Boxservice2 ></Boxservice2> 
    <Boxservice3 ></Boxservice3> 
    <Boxservice4 ></Boxservice4> 
    <Boxservice5></Boxservice5> 
    <Boxservice6 ></Boxservice6> 
    <Boxservice7 ></Boxservice7>
    <Boxservice8 ></Boxservice8>
    <Boxservice9 ></Boxservice9> 
    
    
   
   
    
      </div>

    <div>
      
    </div>
      
      
    </div></div>
      
    </React.Fragment>
  );
}
