import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';

export default function FixedContainer() 


  {
  return (
   <div  style={{zIndex: '-1'}} >
    
    
    <Switch>
       <div className="container1">
       <div className="divcontainer">
      
                <h1 className="text1container1">Hacemos tu</h1>
                <h1 className="text2container1">vida más fácil</h1>
        
      </div>
       </div>
      
   

      
    
    
    <Route component={Error}/>
    </Switch>
     </div>
  );
}
