import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_error: Error): Partial<State> {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center px-4 max-w-lg mx-auto">
            <p className="text-[10px] font-mono font-bold tracking-[0.3em] text-sky-400 uppercase mb-4">
              // SYSTEM_ERROR
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-body text-slate-400 mb-8">
              Our systems have encountered an unexpected error. Our engineering team has been notified.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="primary" size="lg">
                  Return Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => this.setState({ hasError: false })}
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
