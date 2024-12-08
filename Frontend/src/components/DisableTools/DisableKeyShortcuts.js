import { useEffect } from "react";

const DisableKeyShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U") ||
        event.key === "F12"
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default DisableKeyShortcuts;