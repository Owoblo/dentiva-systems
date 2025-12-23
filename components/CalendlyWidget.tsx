'use client';

import { useEffect } from 'react';

type CalendlyWidgetProps = {
  url?: string;
};

export default function CalendlyWidget({ url = 'https://calendly.com/johnowolabi/dentiva-discovery-call' }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[700px]">
      <div
        className="calendly-inline-widget w-full h-full"
        data-url={url}
        style={{ minWidth: '320px', height: '100%' }}
      />
    </div>
  );
}
