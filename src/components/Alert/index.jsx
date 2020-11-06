import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& > * + *': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
}));

export const CustomizedSnackbars = ({ handleClose, open, setOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={handleClose} severity="success">
          Liked!
        </Alert>
      </Snackbar>

    </div>
  );
};
