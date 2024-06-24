// src/hooks/useDelayedPopup.js
import { useState, useEffect } from 'react';

const useDelayedPopup = (delayInSeconds) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, delayInSeconds * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [delayInSeconds]);

  return showPopup;
};

export default useDelayedPopup;
