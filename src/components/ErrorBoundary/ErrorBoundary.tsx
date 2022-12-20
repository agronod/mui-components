import { Alert, Snackbar } from "@mui/material";
import React from "react";

const ErrorBoundaryContext = React.createContext({
  triggerError: ({ error, message }: any) => {},
  state: { hasError: false, message: false },
});

export const useErrorHandling = () => {
  return React.useContext(ErrorBoundaryContext);
};

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, message: false };

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
            <Alert
              severity="error"
              sx={{ alignSelf: "flex-end" }}
              onClose={this.resetError}
            >
              {this.state.message}
            </Alert>
          </Snackbar>
        }
        {this.props.children}
      </ErrorBoundaryContext.Provider>
    );
  }
}
