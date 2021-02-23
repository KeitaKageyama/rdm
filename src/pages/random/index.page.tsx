import React, { FC } from "react";
import Link from "next/link";
import { paths } from "src/constants/paths";
import {
  Box,
  Flex,
  Select,
  Heading,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";

const Random: FC = () => {
  return (
    <Flex marginX="7.84vw" marginY="24vh">
      <Box
        w="62.8%"
        bg="black"
        color="white"
        height="50.1vh"
        marginRight="8.3%"
        paddingX="30px"
        paddingY="26px"
      >
        <Flex flexDirection="column">
          <Heading as="h2" paddingBottom="32px" fontSize="18px">
            ランダム映画とは
          </Heading>
          <Box>
            <Description>
              "全て"がランダムで決まる、新しい映画の楽しみ方です。
            </Description>
            <Description>
              なんとなく映画見に行きたいけど特に見たいものが決まっていない時、新しい映画を発掘したい時、映画を予約する手間が面倒な時、全てを運に委ねてみたい時…
            </Description>
            <Description>そんな時にランダム映画が役に立ちます。</Description>
            <Description>
              タイトルはもちろん値段・席・時間まで、ワンクリックで全て決まります。
            </Description>
            <Description>
              ランダム映画を使って、貴方も普段と一味違う映画の楽しみ方を味わってはいかが？
            </Description>
          </Box>
        </Flex>
      </Box>
      <Box flexGrow={1}>
        <Flex height="100%" flexDirection="column">
          <Spacer />
          <Select
            bg="black"
            borderColor="black"
            color="white"
            placeholder="人数を選択"
          ></Select>
          <Spacer />
          <Select
            bg="black"
            borderColor="black"
            color="white"
            placeholder="日付を選択"
          ></Select>
          <Spacer />
          <Select
            bg="black"
            borderColor="black"
            color="white"
            placeholder="時間を選択"
          ></Select>
          <Spacer />
          <Link href={paths.payment}>
            <Button bg="red" color="white">
              支払いページへ
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

const Description = styled(Text)`
  padding-bottom: 18px;
`;

export default Random;
