export const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    display: 'flex'
  },
  uploader: {
    display: "flex",
    width: '100%',
    justifyContent: "space-around",
    alignItems: "center",
  },
  textField: {
    margin: theme.spacing.unit,
    display: "flex",
    width: "50%"
  },
  button: {
    margin: theme.spacing.unit,
    display: "flex"
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  progress: {
    margin: theme.spacing.unit
  }
});