import { Alert, Snackbar } from "@mui/material";
import React, { PropsWithChildren } from "react";

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

export default class ErrorBoundary extends React.Component<PropsWithChildren> {
  state = {
    hasError: false,
    message: "",
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, message: any) {
    // errorService.log({ error, errorInfo });
  }

  triggerError = ({ error, message }: any) => {
    // errorService.log({ error, errorInfo });
    this.setState({ hasError: true, message });
  };

  resetError = () => this.setState({ hasError: false });

  render() {
    return (
      <ErrorBoundaryContext.Provider
        value={{
          triggerError: this.triggerError,
          state: this.state,
        }}
      >
        {
          <Snackbar
            open={this.state.hasError}
            sx={{ height: "auto !important" }}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <ErrorMessage
              message={this.state.message}
              onClose={this.resetError}
            />
          </Snackbar>
        }
        {this.props.children}
      </ErrorBoundaryContext.Provider>
    );
  }
}
