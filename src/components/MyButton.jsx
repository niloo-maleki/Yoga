import React from "react";

const MyButton = ({children , classes}) => {

  return (
      <button
      type="button"
      className={classes}
      >
        {children}
      </button>
  );
};

export default MyButton;
