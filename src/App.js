import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selection, setSelection] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const handleFruitSelect = (option) => {
    setSelectedFruit(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const fruits = [
    { label: "Apple", value: "Apple" },
    { label: "Banana", value: "Banana" },
    { label: "Mango", value: "Mango" },
    { label: "Orange", value: "Orange" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown
        options={fruits}
        value={selectedFruit}
        onChange={handleFruitSelect}
      />
    </div>
  );
};

export default App;
