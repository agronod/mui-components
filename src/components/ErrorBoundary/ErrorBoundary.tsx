import { Alert, Snackbar } from "@mui/material";
import React, { ErrorInfo, PropsWithChildren, useState } from "react";

const ErrorBoundaryContext = React.createContext({
  triggerError: ({ error, message }: any) => {},
  state: { hasError: false, message: "" },
});

export const useErrorHandling = () => {
  return React.useContext(ErrorBoundaryContext);
};

export const ErrorMessage = ({
  message,
  onClose,
}: {
  message: string;
  onClose?: () => void;
}) => {
  return (
    <Alert severity="error" sx={{ alignSelf: "flex-end" }} onClose={onClose}>
      {message}
    </Alert>
  );
};

interface State {
  hasError: boolean;
  message: string;
}

const ErrorBoundary: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<State>({
    hasError: false,
    message: "",
  });

  const triggerError = ({ error, message }: any) => {
    setState({ hasError: true, message });
  };

  const resetError = () => {
    setState({ hasError: false, message: "" });
  };

  const { hasError, message } = state;

  return (
    <ErrorBoundaryContext.Provider
      value={{
        triggerError,
        state,
      }}
    >
      <Snackbar
        open={hasError}
        sx={{ height: "auto !important" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="error"
          sx={{ alignSelf: "flex-end" }}
          onClose={resetError}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </ErrorBoundaryContext.Provider>
  );
};

export default ErrorBoundary;
