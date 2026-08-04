"use client";
import { useState, useEffect, useRef } from 'react';
import HeroBanner from '@/components/HeroBanner';
import Hero from '@/components/Hero';
import EmiCalculator from '@/components/EmiCalculator';
import HowItWorks from '@/components/HowItWorks';
import ValueProposition from '@/components/ValueProposition';
import CallToAction from '@/components/CallToAction';
import '@/app/Home.css';

function Home() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force play to bypass some browser autoplay restrictions
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div className="home-page">
      {showVideo && (
        <div className="intro-video-container">
          {/* Replace src with the actual video path later */}
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            playsInline
            onEnded={handleVideoEnd}
            className="intro-video"
          >
            <source src="/scene1.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <button className="skip-video-btn" onClick={() => setShowVideo(false)}>Skip Intro</button>
        </div>
      )}
      
      {!showVideo && (
        <div className="home-content animate-fade-in-up">
          <HeroBanner />
          <Hero />
          <EmiCalculator />
          <ValueProposition />
          <HowItWorks />
          <CallToAction />
        </div>
      )}
    </div>
  );
}

export default Home;
