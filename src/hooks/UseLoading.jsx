import { useState, useEffect } from "react";

const useLoading = (delay = 3000) => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, delay);
  }, [delay]);

  return { loading, fadeIn };
};

export default useLoading;
