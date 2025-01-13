import React, { useState } from "react";
import {
    Box,
    Flex,
    Text,
  } from "@chakra-ui/react";

const ChakraLeftSidebarColSections = () => {
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
            <Flex direction="column" flex="1" minWidth="0" overflow="hidden" gap="4">
                <Box
                    bg="gray.100"
                    width="100%"
                    minWidth="300px"
                    overflow="hidden"
                    p="4"
                >
                    섹션1
                </Box>
                <Box
                    bg="gray.100"
                    width="100%"
                    minWidth="300px"
                    overflow="hidden"
                    p="4"
                >
                    섹션2
                </Box>
                <Box
                    bg="gray.100"
                    width="100%"
                    minWidth="300px"
                    overflow="hidden"
                    p="4"
                >
                    섹션3
                </Box>
            </Flex>
        </Flex>
    );
};

export default ChakraLeftSidebarColSections;
