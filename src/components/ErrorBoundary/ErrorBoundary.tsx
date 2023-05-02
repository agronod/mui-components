import { Alert, Snackbar } from "@mui/material";
import React, { ErrorInfo, PropsWithChildren } from "react";

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

export default class ErrorBoundary extends React.Component<
  PropsWithChildren,
  State
> {
  state = {
    hasError: false,
    message: "",
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
  }

  triggerError = ({ error, message }: any) => {
    // console.log("ErrorBoundary triggerError", error, message);
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
