import React from "react";
import "./Button.css";

function Button({ Message, buttonColor, backgroundColor, children }) {
  return (
    <button
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
