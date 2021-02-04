<<<<<<< HEAD
import React, { useState, useEffect, FC } from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Spacer as Space } from "src/components/Spacer/Spacer";
import { NextPage } from "next";
import Link from "next/link";
import { paths } from "src/constants/paths";

const Verification: NextPage = () => {
  return (
    <ContentsArea>
      <Space size={20} />
      <Box
        w="468px"
        h="395px"
        m="0 auto"
        backgroundImage="url(./images/verification_bg.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        <Space size={150} />
        <Heading color="#fff" fontSize="36px" textAlign="center">
          ご購入ありがとうございます
        </Heading>
        <Text fontSize="18px" color="#fff" textAlign="center">
          下記QRコードにて来場できますので大事に保管ください
          <br />
          このQRコードは送付メールより確認できます
        </Text>
      </Box>
      <Space size={20} />

      <Link href={paths.index}>
        <Text
          color="#fff"
          textAlign="center"
          textDecoration="underline"
          cursor="pointer"
        >
          TOP画面へ戻る
        </Text>
      </Link>
    </ContentsArea>
  );
};

const ContentsArea = styled(Box)`
  background: #505050;
  min-height: 100vh;
`;
=======
import React, {FC} from "react";
import {
  Box,
  Link,
  Text,
  Flex,
  Spacer,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Spacer as Space } from "src/components/Spacer/Spacer";
import styled from "styled-components";


const Verification:NextPage = () => {
  return(
  <Flexbox>
    <QrArea/>
    <Space size={30} horizontal/>
    <QrArea/>
  </Flexbox>);
};

const QrArea: FC = () => {

  return (
    <Qrback>
      <Whitetext>一人目</Whitetext>
      <Space size={30}/>
      <Whitetext>日程</Whitetext>
      <Space size={10} horizontal/>
      <Whitetext>2020/12/08</Whitetext>
      <Whitetext>上映時間  19:00</Whitetext>
      <Whitetext>タイトル  STAND BY ME　ドラえもん</Whitetext>
      <Whitetext>座席  L32</Whitetext>
    </Qrback>
  )
}
>>>>>>> QRコンポーメントを作る

const Qrback = styled(Box)`
 font-size: 14px;
 bottom: 0;
 background:#222;
 width: 600px;
 height: 300px;
 margin-left: 20%;
 margin-bottom: 20px;
`
const Whitetext = styled(Text)`
  color: #fbfbfb;
`
const Flexbox = styled(Flex)`
  flex-wrap: wrap;
	justify-content: space-between;
`
export default Verification;