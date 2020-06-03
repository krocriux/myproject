import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3B49DF 30%, #3B49DF 90%)',
    border: 0,
    borderRadius: 3,
    fontWeight: 900,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'White',
    height: 35,
    padding: '0 20px',
    width: 'auto',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>¿Eres profesional?</Button>;
}