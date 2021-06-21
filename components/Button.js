import React from "react";

const Button = ({ children }) => {
  return (
    <button>
      {children}

      <style jsx>{`
        button {
          color: red;
        }
      `}</style>
    </button>
  );
};

export default Button;
