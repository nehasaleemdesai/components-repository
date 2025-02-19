import React from "react";
import { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    // close dropdown
    setIsOpen(false);

    // what option did the user click on?
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={handleOptionClick} key={option.value}>
        {" "}
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={() => handleClick(option)}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
