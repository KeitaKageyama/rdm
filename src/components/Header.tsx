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

import { paths } from "src/constants/paths";
import Link from "next/link";
import { Spacer as Space } from "src/components/Spacer/Spacer";

export const Header: FC = () => {
  return (
    <Flex background="#222" alignItems="center" p="0 40px" height="100px">
      <Box>
        <Heading display="none" size="md">
          rdm (ランダム映画館)
        </Heading>
        <Link href={paths.index}>
          <Image cursor="pointer" src="./images/logo.png" alt="rdm"></Image>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Button variant="link">
          <Link href={paths.random}>
            <Text color="#fff">ランダム</Text>
          </Link>
        </Button>
        <Space horizontal size="xxl" />
        <Button variant="link">
          <Link href={paths.moveList}>
            <Text color="#fff">公開中</Text>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};
