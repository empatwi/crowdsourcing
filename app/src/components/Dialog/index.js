import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { main } from '../../utils/content';
import { colors } from '../../utils/theme';

const propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const defaultProps = {};

const styles = {
  buttonCancel: {
    color: colors.buttonRed,
    fontWeight: 'bold',
  },
  buttonConfirm: {
    color: colors.buttonGreen,
  },
};

export default function ConfirmationDialog({
  handleCancel,
  handleConfirmation,
  open,
}) {
  return (
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="confirmation-dialog-title"
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="sm"
      open={open}
    >
      <DialogTitle id="confirmation-dialog-title">{main.confirm}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {main.confirmText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} style={styles.buttonCancel}>
          {main.cancel}
        </Button>
        <Button onClick={handleConfirmation} style={styles.buttonConfirm}>
          {main.okay}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = propTypes;
ConfirmationDialog.defaultProps = defaultProps;
