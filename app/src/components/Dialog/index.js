import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { main } from '../../utils/content';
import { colors } from '../../utils/theme';

const styles = {
  buttonCancel: {
    color: colors.buttonRed,
    fontWeight: 'bold',
  },
  buttonConfirm: {
    color: colors.buttonGreen,
  },
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    width: '100%',
  },
  paper: {
    maxHeight: 435,
    width: '80%',
  },
}));

export default function ConfirmationDialog() {
  const [open, setOpen] = useState(false);

  const handleCancel = () => {};

  const handleOk = () => {};

  return (
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="confirmation-dialog-title"
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="sm"
      open
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
        <Button onClick={handleOk} style={styles.buttonConfirm}>
          {main.okay}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
