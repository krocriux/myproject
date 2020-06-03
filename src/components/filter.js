/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';

export default function Grouped() {

    
  const options = top100Films.map((option) => {
      
    
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
        
    };
  });

  return (
      
      <div style={{marginTop: '-50px', marginLeft: '24px'}}><Autocomplete 

        
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      style={{ width: 600, backgroundColor: 'white', marginLeft: '300px', marginTop: '-58px'}}
      renderInput={(params) => <TextField style={{borderColor: 'yellow'}} {...params} label="¿Que servicio esta buscando?" variant="outlined" />}
    /> </div>
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Gasfitería', general: 1994 },
  { title: 'Mi calefont no prende', general: 1994 },
  { title: 'Gasfitería1', general: 1994 },
  { title: 'Gasfitería2', general: 1994 },
  { title: 'Gasfitería2', general: 1994 },
  { title: 'Gasfitería3', general: 1994 },
  { title: 'Gasfitería4', general: 1994 },
  { title: 'Gasfitería5 ', general: 1994 },
  
];
