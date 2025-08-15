// components/YouTubePreview.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";

interface YouTubePreviewProps {
  videoId: string;
}

const YouTubePreview: React.FC<YouTubePreviewProps> = ({ videoId }) => {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const loopInterval = setInterval(() => {
      if (iframeRef.current) {
        // Restart video from 0 seconds
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"seekTo","args":[0,true]}',
          "*"
        );
        // Play again
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
    }, 10000); // every 10 seconds

    return () => clearInterval(loopInterval);
  }, []);

  const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="relative w-full h-screen">
      {/* Button */}
      <button
        onClick={() => router.push(youtubeLink)}
        className="absolute cursor-pointer top-4 -right-4 -translate-x-1/2 z-10 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
      >
        {isMobile ? <ExternalLink /> : "Watch on YouTube"}
      </button>

      {/* Autoplay preview video */}
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&enablejsapi=1`}
        title="YouTube video preview"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default YouTubePreview;
