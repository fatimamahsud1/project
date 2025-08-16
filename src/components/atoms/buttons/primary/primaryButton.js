"use client";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '../../../../constants/imageConstants';
import { useState, useEffect } from 'react';

const PrimaryButton = ({ text, className, ...rest }) => {
  const [iconSrc, setIconSrc] = useState(images.svg.whiteRightArrowSm.src);

  useEffect(() => {
    const updateIconSrc = () => {
      if (typeof window !== 'undefined') { // Ensure this code only runs on the client side
        if (window.matchMedia('(min-width: 1920px)').matches) {
          setIconSrc(images.svg.whiteRightArrow.src);
        } else if (window.matchMedia('(min-width: 1600px)').matches) {
          setIconSrc(images.svg.whiteRightArrowMd.src);
        } else {
          setIconSrc(images.svg.whiteRightArrowSm.src);
        }
      }
    };

    updateIconSrc();
    window.addEventListener('resize', updateIconSrc);

    return () => {
      window.removeEventListener('resize', updateIconSrc);
    };
  }, []);

  const buttonClasses = classNames('button-container', className);

  return (
    <div className={buttonClasses} {...rest}>
      <div className="icon-container">
        <img src={iconSrc} alt="Next Arrow" />
      </div>
      <div className="text-container absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[32px] transition-transform duration-300 ease-out mr-5">
        {text}
      </div>
    </div>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PrimaryButton;
