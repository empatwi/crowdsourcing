import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactCard from '../components/ContactCard';
import { contacts } from '../utils';

const propTypes = {
  offset: PropTypes.string,
};

const defaultProps = {
  offset: '90px',
};

const Contact = ({ offset }) => {
  return (
    <ContactContainer>
      {contacts.map((item, i) => (
        <ContactCard
          info={item}
          key={i + Math.random().toString(36).substring(2, 15)}
        />
      ))}
    </ContactContainer>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export default Contact;
