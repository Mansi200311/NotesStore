import { useEffect } from "react";

const DisableDevToolsOption = () => {
  useEffect(() => {
    let devToolsOpen = false;

    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      const orientation = widthThreshold ? "vertical" : "horizontal";

      if (widthThreshold || heightThreshold) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          handleDevToolsOpen(orientation);
        }
      } else {
        if (devToolsOpen) {
          devToolsOpen = false;
          handleDevToolsClose();
        }
      }
    };

    const handleDevToolsOpen = (orientation) => {
      console.warn("DevTools opened!", orientation);
      // Remove page content
      document.body.innerHTML = "<h1>Access Denied</h1>";
    };

    const handleDevToolsClose = () => {
      console.log("DevTools closed!");
    };

    // Check every 500ms
    const intervalId = setInterval(detectDevTools, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DisableDevToolsOption;
