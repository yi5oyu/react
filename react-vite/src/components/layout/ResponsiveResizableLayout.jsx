import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import MarkdownText from "../MarkdownText";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";

function ResponsiveResizableLayout() {
  const [markdownText, setMarkdownText] = useState("# Welcome to Markdown Preview!");

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [centerPaneWidth, setCenterPaneWidth] = useState(300);
  const SIDEBAR_WIDTH = 300;

  // State to control the width of the left and right sections
  const [leftSectionWidth, setLeftSectionWidth] = useState(300); // Initial width of left section
  const [rightSectionWidth, setRightSectionWidth] = useState(window.innerWidth - leftSectionWidth - 300); // Subtracting sidebar width

  const handleDrag = (e) => {
    const newLeftWidth = e.clientX - 300; // Subtract the sidebar width (300px)
    const newRightWidth = window.innerWidth - newLeftWidth - 300 - 10; // Subtract sidebar and line width (10px)

    if (newLeftWidth >= 300 && newRightWidth >= 300) {
      setLeftSectionWidth(newLeftWidth);
      setRightSectionWidth(newRightWidth);
    }
  };

  const stopDragging = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDragging);
  };

  const startDragging = () => {
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDragging);
  };

  return (
    <Flex height="100vh" width="100vw">
      {/* 사이드바 */}
      <Box
        bg="gray.900"
        color="white"
        width={{ base: "0", md: `${SIDEBAR_WIDTH}px` }}
        transition="width 0.2s"
        display={{ base: "none", md: "block" }}
      >
        <Text fontSize="xl" p="4" fontWeight="bold">
          사이드바
        </Text>
        <Text p="4">1</Text>
        <Text p="4">2</Text>
      </Box>

      {/* 반응형(모바일) */}
      <IconButton
        icon={<FiMenu />}
        aria-label="Open Menu"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        position="absolute"
        top="4"
        left="4"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>사이드바</DrawerHeader>
          <DrawerBody>
            <Text>1</Text>
            <Text>2</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content with Resizable Sections */}
      <Flex flex="1" minWidth="0" overflow="hidden">
        {/* Left Section */}
        <Box
          bg="gray.100"
          width={`${leftSectionWidth}px`}
          minWidth="300px"
          overflow="hidden"
          p="4"
        >
          <MarkdownText markdownText={markdownText} setMarkdownText={setMarkdownText} />
        </Box>

        {/* Draggable Divider */}
        <Box
          width="10px"
          bg="gray.600"
          cursor="col-resize"
          _hover={{ bg: "gray.500" }}
          onMouseDown={startDragging}
          p="2"
        ></Box>

        {/* Right Section */}
        <Box
          bg="gray.50"
          flex="1"
          width={`${rightSectionWidth}px`}
          minWidth="300px"
          overflow="hidden"
        >
          <ReactMarkdown 
              components={ChakraUIRenderer()}
              remarkPlugins={[remarkGfm]}
          >
              {markdownText}
          </ReactMarkdown>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ResponsiveResizableLayout;
