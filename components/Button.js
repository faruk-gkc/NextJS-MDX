import React from "react";

const Button = ({ children }) => {
  return (
    <button>
      {children}

      <style jsx>{`
        button {
          border: 1px solid #000;
          border-radius: 15px;
          color: #fff;  
          background-color: red;
          padding: 8px 16px;
          font-size: 16px;
          cursor: pointer;
          /* border: '1px solid black',
            color: 'black',
            padding: '0.5em 1em',
            cursor: 'pointer',
            fontSize: '1.1em', */
        
      `}</style>
    </button>
  );
};

export default Button;
