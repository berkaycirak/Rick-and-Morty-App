import './UpButton.styles.scss';
import { FaAngleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function UpButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <div className='top-to-btn'>
      {showTopBtn && (
        <FaAngleUp className='icon-position icon-style' onClick={goToTop} />
      )}
    </div>
  );
}

export default UpButton;
