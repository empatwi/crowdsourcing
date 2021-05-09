import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { fontSize } from '../constants';
import { about } from '../utils';
import { colors } from '../utils/theme';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: '5rem',
  },
}));

const About = () => {
  const classes = useStyles();
  // const match = text.match('empatwiapp@gmail.com');

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
            {about?.text.map((text, i) =>
              i === 3 ? (
                <SpecialText
                  key={i + Math.random().toString(36).substring(2, 15)}
                >
                  {text}
                </SpecialText>
              ) : (
                <Text key={i + Math.random().toString(36).substring(2, 15)}>
                  {text}
                </Text>
              ),
            )}
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
  margin-bottom: 1rem;
  padding: 2rem 1rem;
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  font-size: ${fontSize};
`;

const SpecialText = styled(Text)`
  font-size: ${fontSize};
  /* font-style: italic; */
  text-decoration: underline;
`;

export default About;
