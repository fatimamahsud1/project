"use client";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '../../../../constants/imageConstants'; 
import Typography from '../../typography/typography';
import  { useState } from 'react';

const SecondaryButton = ({ text, showIcon = true, className, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonClasses = classNames('buttonsec', className, {
    'hover 2xl:hover 3xl:hover': showIcon,
  });

  return (
    <button
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <Typography tag='a' className='btn-link-default"
        />'>
        {text}
      </Typography>
      {showIcon && (
        <img
          src={isHovered ? images.svg.whiteRightArrow.src : images.svg.brownRightArrow.src}
          alt="Next Arrow"
          className="h-[1.188rem] w-[1.188rem] md:h-[21.313rem] md:w-[1.313rem] xl:h-[1.375rem] xl:w-[1.375] 2xl:h-[1.5rem] 2xl:w-[1.625rem] 3xl:h-[1.75rem] 3xl:w-[1.688rem]"
        />
      )}
    </button>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  className: PropTypes.string,
};

export default SecondaryButton;
