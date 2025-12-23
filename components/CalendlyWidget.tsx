'use client';

import { useEffect, useRef } from 'react';

type CalendlyWidgetProps = {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    text?: string;
  };
};

export default function CalendlyWidget({
  url = 'https://calendly.com/johnowolabi/dentiva-discovery-call',
  prefill
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    const container = containerRef.current;

    if (!container) return;

    // Helper to init widget
    const initWidget = () => {
      // @ts-ignore - Calendly is added to window
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url,
          parentElement: container,
          prefill,
          utm: {}
        });
      }
    };

    // Check if script is already loaded
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      initWidget();
      return;
    }

    // Load script if not present
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed - mainly removing the container content to prevent duplicates if strict mode mounts twice
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [url, prefill]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
