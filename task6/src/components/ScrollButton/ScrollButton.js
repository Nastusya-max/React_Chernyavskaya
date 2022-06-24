import React, { useEffect, useState } from 'react';
import './scrollButton.css'

const ScrollButton = () => {
  const [isVisable, setIsVisiable] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisiable(true)
    } else {
      setIsVisiable(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: (window.pageYOffset >= window.document.body.offsetHeight / 2 ? 0 : window.document.body.offsetHeight),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div>
      <button type='button' onClick={scrollToTop} className={isVisable ? 'scrollButton active' : 'scrollButton'}>
        {'\u2191 \u2193'}
      </button>
    </div>
  );
}

export default ScrollButton;