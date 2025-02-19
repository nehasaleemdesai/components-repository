import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: "a1",
      label: "Can I use React on a Project?",
      content: "Do whatever, dont ask me!",
    },
    {
      id: "b1",
      label: "Can I use Javascript on a Project?",
      content: "What did I just say? dont ask me!",
    },
    {
      id: "c1",
      label: "Can I use CSS on a Project?",
      content: "You are pissing me off!",
    },
  ];
  return <Accordion items={items} />;
};

export default App;
