import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

// TODO: Rename this component when possible
function Tacos() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Taco Recipies...
      </Typography>

      <Button
        onClick={() => console.log('Call recipies endpoint')}
        type="button"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
      >
        Get Recipies
      </Button>
    </Container>
  );
}

export default Tacos;