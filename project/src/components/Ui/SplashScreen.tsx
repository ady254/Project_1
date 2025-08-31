import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out
      setTimeout(() => setIsVisible(false), 700); // remove completely after fade
    }, 2000); // show splash for 2s

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center 
        bg-gradient-to-r from-amber-600 to-amber-400 z-[9999] 
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-center">
        {/* Company Logo */}
        <img
          src="/public/LOGO.png"
          alt="Logo"
          className="h-20 mx-auto animate-bounce"
        />

        {/* Company Name */}
        <h1 className="mt-4 text-2xl font-bold text-white animate-pulse">
          Metal Stickers India
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
