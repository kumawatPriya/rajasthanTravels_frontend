// GlobalSnackbar.jsx
import React, { useState, forwardRef } from "react";
import { Snackbar, Alert } from "@mui/material";

let showGlobalSnackbar = () => {}; // will be set internally

const GlobalSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({
    message: "",
    severity: "info",
  });

  showGlobalSnackbar = (message, severity = "info") => {
    setOptions({ message, severity });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={options.severity} onClose={handleClose} variant="filled">
        {options.message}
      </Alert>
    </Snackbar>
  );
};

export { GlobalSnackbar, showGlobalSnackbar };
