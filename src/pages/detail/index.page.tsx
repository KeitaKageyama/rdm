import React from "react";
import { paths } from "src/constants/paths";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { Spacer } from "src/components/Spacer/Spacer";
import styled from "styled-components";
import { colors } from "../../styles/theme";

const Detail: NextPage = () => {
  const router = useRouter();
  const { title, imagePath, overview } = router.query;

  return (
    <Box w="825px" m="0 auto">
      <Spacer size={78} />
      <Box bg="darkGray" w="100%" h="300px">
        <Image
          src={`https://image.tmdb.org/t/p/w185/${imagePath}`}
          alt="poster"
          h="100%"
          m="0 auto"
        />
      </Box>
      <Spacer size={30} />
      <Flex justifyContent="space-between">
        <Box w="333px">
          <Text fontSize="18px">{title}</Text>
          <Spacer size={20} />
          <Text fontSize="12px">{title}</Text>
          <Spacer size={20} />
          <Text fontSize="12px">{overview}</Text>
        </Box>

        <Box>
          <Flex>
            <SubImageBox />
            <Spacer horizontal size={17} />
            <SubImageBox />
            <Spacer horizontal size={17} />
            <SubImageBox />
            <Spacer horizontal size={17} />
            <SubImageBox />
          </Flex>
          <Spacer size={32} />
          <Flex>
            <ActorText>監督</ActorText>
            <Spacer horizontal size={8} />
            <Text>八木竜一、山崎貴</Text>
          </Flex>
          <Spacer size={8} />
          <Flex>
            <ActorText>出演</ActorText>
            <Spacer horizontal size={8} />
            <Text>声の出演：水田わさび、大原めぐみ、かかずゆみ</Text>
          </Flex>
        </Box>
      </Flex>
      <Spacer size={60} />
      <Box textAlign="center">
        <Button w="331px" h="40px" bg="red" color="white">
          <Link href={paths.random}>ランダムで映画を見る</Link>
        </Button>
      </Box>
      <Spacer size={100} />
    </Box>
  );
};

const SubImageBox = styled(Box)`
  width: 70px;
  height: 50px;
  background: ${colors.lightGray};
`;

const ActorText = styled(Box)`
  background: ${colors.lightGray};
  color: ${colors.black};
  height: 19px;
  line-height: 19px;
  width: 35px;
  text-align: center;
  font-size: 12px;
`;

export default Detail;
