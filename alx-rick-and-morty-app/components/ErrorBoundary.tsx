import React, { ErrorInfo, ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error: Error){
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo){
    console.log({ error, errorInfo })
  }

  render() {
    if(this.state.hasError){
        return(
            <div>
                <h1>Oops, there is an error!</h1>
                <button onClick={()=>this.setState({hasError: false})}>
                    Try again?
                </button>
            </div>
        )
    }
      return this.props.children
  }
}

export default ErrorBoundary;
