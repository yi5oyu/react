import React, { useState } from "react";
import {
    Box,
    Flex,
    Text,
  } from "@chakra-ui/react";

const ChakraLeftSidebarFourSections = () => {
    const SIDEBAR_WIDTH = 200;

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

            {/* 메인 화면 */}
            <Flex
                flex="1"
                direction="column"
                p="4"
                gap="4"
            >
                <Flex flex="1" gap="4">
                <Box
                    bg="gray.100"
                    flex="1"
                    minWidth="0"
                    height="100%"
                    width="100%"
                    p="4"
                >
                    섹션1
                </Box>
                <Box
                    bg="gray.100"
                    flex="1"
                    minWidth="0"
                    height="100%"
                    width="100%"
                    p="4"
                >
                    섹션2
                </Box>
                </Flex>
                <Flex flex="1" gap="4">
                <Box
                    bg="gray.100"
                    flex="1"
                    minWidth="0"
                    height="100%"
                    width="100%"
                    p="4"
                >
                    섹션3
                </Box>
                <Box
                    bg="gray.100"
                    flex="1"
                    minWidth="0"
                    height="100%"
                    width="100%"
                    p="4"
                >
                    섹션4
                </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ChakraLeftSidebarFourSections;
