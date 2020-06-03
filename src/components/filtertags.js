/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FixedTags() {
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      style={{ width: 600, backgroundColor: 'white', marginLeft: '3000px', marginTop: '-58px'}}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[0], top100Films[1]]}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option.title} {...getTagProps({ index })} disabled={index === 0} />
        ))
      }
      style={{ width: 500, backgroundColor: 'white', marginLeft: '340px', marginTop: '-55px'}}
      renderInput={(params) => ( 
        <TextField {...params} label="Usa palabras claves y te solucionamos el problema" variant="outlined" placeholder="" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Instalación de WC', year: 1994 },
  { title: 'Grifería', year: 1972 },
  
];
