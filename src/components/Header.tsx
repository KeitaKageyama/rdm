import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { Spacer as Space } from "src/components/Spacer/Spacer";

export const Header: FC = () => {
  return (
    <Flex background="#222" alignItems="center" p="0 40px" height="100px">
      <Box>
        <Heading display="none" size="md">
          rdm (ランダム映画館)
        </Heading>
        <Image src="./images/logo.png" alt="rdm"></Image>
      </Box>
      <Spacer />
      <Box>
        <Button variant="link">
          <Text color="#fff">ランダム</Text>
        </Button>
        <Space horizontal size="xxl" />
        <Button variant="link">
          <Text color="#fff">公開中</Text>
        </Button>
      </Box>
    </Flex>
  );
};
