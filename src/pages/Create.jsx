import React, { useState } from 'react';
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

const Create = () => {
  const classes = useStyles();
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  
  const handleSubmit = evt => {
    evt.preventDefault();

    const payload = {
      recipeName,
      recipeDescription,
      recipeInstructions,
      recipeIngredients
    }

    // NOTE: Basic form validation for brevity
    if (recipeName) {
      console.log('Submit Taco Recipe: ', payload);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Submit Your Taco Recipe...
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={evt => setRecipeName(evt.target.value)}
          className={classes.field}
          label="Recipe Name"
          variant="outlined"
          color="secondary"
          fullWidth
        />

        <TextField
          onChange={evt => setRecipeDescription(evt.target.value)}
          className={classes.field}
          label="Recipe Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
        />

        <TextField
          onChange={evt => setRecipeInstructions(evt.target.value)}
          className={classes.field}
          label="Recipe Instructions"
          placeholder="Section simplified for brevity. This section would be more dynamic, allowing the user to add / remove steps"
          variant="outlined"
          color="secondary"
          multiline
          rows={8}
          fullWidth
        />

        <TextField
          onChange={evt => setRecipeIngredients(evt.target.value)}
          className={classes.field}
          label="Ingredients"
          placeholder="Section simplified for brevity. This section would be more dynamic, allowing the user to add / remove individual ingredients"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
        />

        <Button
          onClick={() => console.log('Submit recipe...')}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;