import { useEffect, useState } from "react";

const ModeDetector = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;

    const checkDark = () => {
      if (classList.contains("dark")) return true;
      if (classList.contains("light")) return false;
    };

    setIsDark(checkDark());

    const observer = new MutationObserver(() => setIsDark(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

export default ModeDetector;
