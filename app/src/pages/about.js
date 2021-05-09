import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import { about } from '../utils';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        alignContent="center"
        container
        display="flex"
        justifyContent="center"
        minHeight="100vh"
      >
        <Text>{about.text}</Text>
      </Grid>
    </div>
  );
};

const Text = styled.p`
  font-size: 1rem;
`;

export default About;
