import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { FC } from "react";

import { paths } from "src/constants/paths";
import Link from "next/link";
import { Spacer as Space } from "src/components/Spacer/Spacer";

export const Header: FC = () => {
  return (
    <Flex bg="black" alignItems="center" p="0 40px" height="100px">
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
            <Text color="white">ランダム</Text>
          </Link>
        </Button>
        <Space horizontal size="xxl" />
        <Button variant="link">
          <Link href={paths.moveList}>
            <Text color="white">公開中</Text>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};
