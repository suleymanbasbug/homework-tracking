import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

type Props = {
  message: string,
  type: AlertColor,
};
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Toaster: React.FC<Props> = ({ message, type }): JSX.Element => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert  onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Toaster;
