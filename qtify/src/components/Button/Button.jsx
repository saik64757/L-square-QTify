import React from "react";
import "./Button.css";

function Button({
  Message,
  buttonColor,
  backgroundColor,
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={!!disabled}
      onClick={onClick}
      className="feedBackButton"
      style={{
        color: `var(${buttonColor})`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {children}
      {Message}
    </button>
  );
}

export default Button;
