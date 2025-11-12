import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="
            w-12 h-12 
            rounded-full 
            bg-[#6F73EE] 
            text-white 
            border-none 
            cursor-pointer 
            flex items-center justify-center 
            text-xl 
            font-semibold
            shadow-lg
            transition-all 
            duration-300 
            ease-in-out
            hover:bg-[#5a5fd8] 
            hover:shadow-xl
            hover:scale-110
            active:scale-105
            focus:outline-none
            focus:ring-2
            focus:ring-[#6F73EE]
            focus:ring-opacity-50
          "
          aria-label="Наверх"
        >
          ↑
        </button>
      )}
    </div>
  );
};