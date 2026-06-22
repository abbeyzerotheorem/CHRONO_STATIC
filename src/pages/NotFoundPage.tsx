import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import notFoundAnimationRaw from '../../public/page-not-found.json?raw';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-lg mx-auto">
        {/* Lottie Animation */}
        <div className="w-64 h-64 mx-auto mb-6">
          <Lottie
            animationData={JSON.parse(notFoundAnimationRaw)}
            loop
            autoplay
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
          />
        </div>

        <p className="text-[10px] font-mono font-bold tracking-[0.3em] text-sky-400 uppercase mb-4">
          // ERROR_404
        </p>
        <h1 className="text-display-lg text-white mb-4">Signal Lost</h1>
        <p className="text-body text-slate-400 max-w-md mx-auto mb-8">
          The coordinates you entered don't match any known location in our systems. 
          Return to base camp and try again.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" icon={<ArrowLeft className="w-4 h-4" />}>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}