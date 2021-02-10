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
      <Flexbox>
        <QrArea/>
        <Space size={40}/>
        <QrArea/>
    </Flexbox>);
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

const QrArea: FC = () => {

  return (
    <Qrback>
      <Fbox>
        <Box>
          <Image src="./images/qrcode.png"/>
        </Box>
        <Box>
          <Fwrap>
            <Whitetext>一人目</Whitetext>
            <Space size={70} horizontal/>
          </Fwrap>
          <Fwrap>
            <Whitetext>日程</Whitetext>
            <Space size={67} horizontal/>
            <Whitetext>2020/12/08</Whitetext>
          </Fwrap>
          <Fwrap>
            <Whitetext>上映時間</Whitetext>
            <Space size={40} horizontal/>
            <Whitetext>19:00</Whitetext>
          </Fwrap>
          <Fwrap>
            <Whitetext>タイトル</Whitetext>
            <Space size={40} horizontal/>
            <Whitetext>STAND BY ME　ドラえもん</Whitetext>
          </Fwrap>
          <Fwrap>
            <Whitetext>座席</Whitetext>
            <Space size={67} horizontal/>
            <Whitetext>L32</Whitetext>
          </Fwrap>
          <Smalltext>※15分前より開場しますのでお早めにお越しください。</Smalltext>
          <Smalltext>※キャンセルできませんのでご注意ください。</Smalltext>
        </Box>
      </Fbox>
    </Qrback>
  )
}

const Qrback = styled(Box)`
 bottom: 0;
 background:#222;
 width: 1000px;
 height: 450px;
 margin: 0 auto;
`
const Fbox = styled(Flex)`
  justify-content: space-between;
  align-items:center;
  padding-left:60px;
`
const Fwrap = styled(Flex)`
  width:500px;
  height: 20px;
  flex:wrap;
  margin-bottom:20px;
`
const Whitetext = styled(Text)`
  font-size: 14px;
  color: #fbfbfb;
  font-weight:900;
`
const Flexbox = styled(Flex)`
  flex-wrap: wrap;
	justify-content: space-between;
`
const Smalltext = styled(Text)`
  font-size: 8px;
  color:#fbfbfb;
`
export default Verification;