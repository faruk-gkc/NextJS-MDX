import React from "react";

const Button = ({ children }) => {
  return (
    <button className="button button--nuka button--round-s button--text-thick">
      {children}

      <style jsx>{`
        .button {
          margin-top: 15px;
          box-shadow: 0px -1px 0px 3px #9fb4f2;
          background-color: #7892c2;
          border-radius: 19px;
          border: 1px solid #4e6096;
          display: inline-block;
          cursor: pointer;
          color: #ffffff;
          font-family: Trebuchet MS;
          font-size: 20px;
          padding: 14px 60px;
          text-decoration: none;
          text-shadow: 0px 2px 0px #283989;
          &:hover {
            background-color: #476e9e;
          }
          &:active {
            position: relative;
            top: 1px;
          }
        }
      `}</style>
    </button>
  );
};

export default Button;
