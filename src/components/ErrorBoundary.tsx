import React from 'react';

type ErrorBoundaryProps = {}

type ErrorBoundaryState = {
  hasError: boolean,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.error('Error catched: ', error);
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something happened</h1>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
