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
      {/* Wrap logo + text in one flex column */}
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/LOGO.png"
          alt="Metal Stickers India Logo"
          className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain mx-auto"
        />
        <span className="mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white animate-pulse">
          Metal Stickers India
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
