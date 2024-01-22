import { useState, useEffect } from 'react';

const useScreen = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });
  const [isLarge, setIsLarge] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsLarge(window.innerWidth > 1024);
      setIsMedium(window.innerWidth > 768 && window.innerWidth <= 1024);
      setIsSmall(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width: screenSize.width,
    height: screenSize.height,
    isLarge,
    isMedium,
    isSmall,
  };
};

export default useScreen;