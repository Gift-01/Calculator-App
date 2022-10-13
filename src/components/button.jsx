import React from "react";

const Button = ({ text,className,handleClick }) => {
  return (
    <div onClick ={() => handleClick(text)} className="button">
      <button className={className}>{text}</button>
    </div>
  );
};
export default Button;