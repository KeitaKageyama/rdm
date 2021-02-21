import React from "react";
import Link from "next/link";
import { paths } from "src/constants/paths";
import { Box, Flex, Select, Heading, Text } from "@chakra-ui/react";

const Random = () => {
  return (
    <Flex padding="8.125vw">
      <Box flexGrow={1} w="50%" bg="#222" color="#FBFBFB">
        <Flex flexDirection="column">
          <Heading as="h2" fontSize="18px">
            ランダム映画とは
          </Heading>
          <Box>
            <Text>"全て"がランダムで決まる、新しい映画の楽しみ方です。</Text>
            <Text>
              なんとなく映画見に行きたいけど特に見たいものが決まっていない時、新しい映画を発掘したい時、映画を予約する手間が面倒な時、全てを運に委ねてみたい時…
            </Text>
            <Text>そんな時にランダム映画が役に立ちます。</Text>
            <Text>
              タイトルはもちろん値段・席・時間まで、ワンクリックで全て決まります。
            </Text>
            <Text>
              ランダム映画を使って、貴方も普段と一味違う映画の楽しみ方を味わってはいかが？
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box flexGrow={1}>
        <Flex flexDirection="column">
          <Select
            bg="#222"
            borderColor="#222"
            color="#FBFBFB"
            placeholder="人数を選択"
          ></Select>
          <Select
            bg="#222"
            borderColor="#222"
            color="#FBFBFB"
            placeholder="日付を選択"
          ></Select>
          <Select
            bg="#222"
            borderColor="#222"
            color="#FBFBFB"
            placeholder="時間を選択"
          ></Select>
          <p>
            <a href={paths.payment}>支払いページへ</a>
          </p>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Random;
