import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ContactCard from '../components/ContactCard';
import { contacts } from '../utils';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const propTypes = {
  offset: PropTypes.string,
};

const defaultProps = {
  offset: '90px',
};

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        alignContent="center"
        alignItems="center"
        container
        display="flex"
        justifyContent="center"
        minHeight="100vh"
        spacing={1}
      >
        {contacts.map((item, i) => (
          <Grid
            item
            key={i + Math.random().toString(36).substring(2, 15)}
            sm={4}
            xs={8}
          >
            <ContactCard info={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
