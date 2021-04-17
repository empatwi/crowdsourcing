import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default function ButtonComponent({ icon, text }) {
  return (
    <Button variant="contained" color="red" endIcon={icon}>
      {text}
    </Button>
  );
}

ButtonComponent.propTypes = propTypes;
