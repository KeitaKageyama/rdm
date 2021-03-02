import React, { FC } from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import styled from "styled-components";
import { Spacer as Space } from "src/components/Spacer/Spacer";
import { NextPage } from "next";
import Link from "next/link";
import { paths } from "src/constants/paths";
import { colors } from "../../styles/theme";
import { useRouter } from "next/router";
type MoveValue = {
  sheet: string;
  time: string;
  title: string;
  date: string;
  index?: number;
};

const Verification: NextPage = () => {
  const router = useRouter();
  const { param } = router.query;
  const moveValues: MoveValue[] = JSON.parse(
    decodeURIComponent(param as string)
  );
  console.log(moveValues);

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
        <Heading color="white" fontSize="36px" textAlign="center">
          ご購入ありがとうございます
        </Heading>
        <Text fontSize="18px" color="white" textAlign="center">
          下記QRコードにて来場できますので大事に保管ください
          <br />
          このQRコードは送付メールより確認できます
        </Text>
      </Box>
      <Space size={20} />

      <Flexbox>
        {moveValues.map((value, index) => {
          return (
            <>
              <QrArea
                index={index}
                title={value.title}
                time={value.time}
                sheet={value.sheet}
                date={value.date}
              />
              <Space size={500} />
            </>
          );
        })}
      </Flexbox>

      <Link href={paths.index}>
        <Text
          color="white"
          textAlign="center"
          textDecoration="underline"
          cursor="pointer"
        >
          TOP画面へ戻る
        </Text>
      </Link>
      <Space size={100} />
    </ContentsArea>
  );
};

const ContentsArea = styled(Box)`
  background: ${colors.gray};
  min-height: 100vh;
`;

const QrArea: FC<MoveValue> = ({ date, index, title, time, sheet }) => {
  return (
    <Qrback>
      <Fbox>
        <Box>
          <Image src="./images/qrcode.png" />
        </Box>
        <Box>
          <Fwrap>
            <Whitetext>{index + 1}人目</Whitetext>
            <Space size={70} horizontal />
          </Fwrap>
          <Fwrap>
            <Whitetext>日程</Whitetext>
            <Space size={67} horizontal />
            <Whitetext>{date}</Whitetext>
          </Fwrap>
          <Fwrap>
            <Whitetext>上映時間</Whitetext>
            <Space size={40} horizontal />
            <Whitetext>{time}</Whitetext>
          </Fwrap>
          <Fwrap>
            <Whitetext>タイトル</Whitetext>
            <Space size={40} horizontal />
            <Whitetext>{title}</Whitetext>
          </Fwrap>
          <Fwrap>
            <Whitetext>座席</Whitetext>
            <Space size={67} horizontal />
            <Whitetext>{sheet}</Whitetext>
          </Fwrap>
          <Smalltext>
            ※15分前より開場しますのでお早めにお越しください。
          </Smalltext>
          <Smalltext>※キャンセルできませんのでご注意ください。</Smalltext>
        </Box>
      </Fbox>
    </Qrback>
  );
};

const Qrback = styled(Box)`
  bottom: 0;
  background: ${colors.black};
  width: 1000px;
  height: 450px;
  margin: 0 auto;
`;
const Fbox = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  padding-top: 100px;
`;
const Fwrap = styled(Flex)`
  width: 500px;
  height: 20px;
  flex: wrap;
  margin-bottom: 20px;
`;
const Whitetext = styled(Text)`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 900;
`;
const Flexbox = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Smalltext = styled(Text)`
  font-size: 8px;
  color: ${colors.white};
`;
export default Verification;
