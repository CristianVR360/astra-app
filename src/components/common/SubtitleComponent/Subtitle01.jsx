import React, { useState, useEffect } from 'react';

const Subtitle01 = ({ subtitles }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (subtitles && subtitles.length > 0) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setSubtitleIndex(prevIndex => (prevIndex + 1) % subtitles.length);
          setIsVisible(true);
        }, 1000);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [subtitles]);

  return (
    <div className={`landing__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
      {subtitles && subtitles[subtitleIndex]}
    </div>
  );
};

export default Subtitle01;