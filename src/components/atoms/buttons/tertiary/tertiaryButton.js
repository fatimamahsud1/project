"use client";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '../../../../constants/imageConstants';
import  { useState } from 'react';

const TertiaryButton = ({ text, className, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonClasses = classNames(
    'button-tertiary',
    {
      'button-hovered': isHovered
    },
    className
  );
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <button
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {text}
      <img
        src={isHovered ? images.svg.whiteRightArrow.src : images.svg.darkBrownRightArrow.src}
        alt="Right Arrow"
        className="ml-1"
      />
    </button>
  );
};

TertiaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TertiaryButton;