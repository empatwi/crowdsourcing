import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { fontSize } from '../constants';
import { about } from '../utils/content';
import { colors } from '../utils/theme';

const margin = 8;

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
        <Grid container item justifyContent="center" sm={8} xs={10}>
          <AboutContainer>
            {about?.text.map((text, i) => (
              <Text
                isUnderlined={i === 3}
                key={i + Math.random().toString(36).substring(2, 15)}
              >
                {text}
              </Text>
            ))}
          </AboutContainer>
        </Grid>
      </Grid>
    </div>
  );
};

const AboutContainer = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  color: ${colors.darkGray};
  padding: 2rem 1rem;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    margin: ${margin}rem 0 ${margin / 2}rem 0;
  }
`;

const Text = styled.p`
  font-size: ${fontSize};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'none')};
`;

export default About;
