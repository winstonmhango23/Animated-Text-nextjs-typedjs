import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function TypedText() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Corporate Lawyers", "Investment Lawyers", "Intellectual Property Lawyers", "International Investment Lawyers", "E-Commerce Lawyers", "Employment & Labour Lawyers", "Insurance Claims Lawyers", "Debt Collection Lawyers"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      
      {/* Element to display typing strings */}
      
      <h2 className="text-white font-bold text-3xl">We are <span ref={el} className="typed-text text-yellow-500 font-bold text-3xl"></span></h2>
    </div>
  );
}