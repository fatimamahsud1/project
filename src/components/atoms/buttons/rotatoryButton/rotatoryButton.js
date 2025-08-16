"use client";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';

const RotatoryButton = ({ text, className, icon, initialIconRotationAngle = 0, onClick, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconRotationAngle, setIconRotationAngle] = useState(initialIconRotationAngle);
  const buttonClasses = classNames(
    'button-tertiary',
    className,
    { 'button-hovered:ml-1 2xl:button-hovered:ml-1 3xl:button-hovered:ml-1': true }
  );
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = (event) => {
    setIconRotationAngle(prevAngle => prevAngle + 45); 
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <button
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...rest}
    >
      {text}
      <img
        src={icon}
        alt="Icon"
        style={{ transform: `rotate(${iconRotationAngle}deg)` }}
      />
    </button>
  );
};

RotatoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  initialIconRotationAngle: PropTypes.number,
  onClick: PropTypes.func,
};

export default RotatoryButton;