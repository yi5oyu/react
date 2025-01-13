import React, { useState } from "react";
import {
  ClassComp,
  FunctionComp,
  ArrowFunctionComp,
} from "./components/ComponentExample";
import Rendering from "./components/Rendering";
import Property from "./components/Property";
import { ResizableBox } from "react-resizable";
import ResponsiveResizableLayout from "./components/layout/ResponsiveResizableLayout";
import ChakraLeftSidebarFourSections from "./components/layout/sidebar/ChakraLeftSidebarFourSections";
import ChakraBox from "./components/Chakra/ChakraBox";
import ChakraLeftSidebarColSections from "./components/layout/sidebar/ChakraLeftSidebarColSections";
import ChakraLeftSidebarSections from "./components/layout/sidebar/ChakraLeftSidebarSections";

const judge = true;
const name = "B";
const array = [
  { id: 1, name: "A" },
  { id: "a", name: "B" },
  { id: true, name: "C" },
  { id: false, name: "D" },
  { id: null, name: "E" },
];

function App() {
    const [markdownText, setMarkdownText] = useState("");

    const handleChange = (event) => {
      setMarkdownText(event.target.value);
    };

  return (
    <>
      {/* <Rendering name={name} judge={judge} array={array} />
      <Property imgalt={name} />
      <Markdown /> */}
      <ChakraLeftSidebarSections />
      {/* <ChakraBox /> */}
      {/* <ChakraInput /> */}
    </>
  );
}

export default App;
