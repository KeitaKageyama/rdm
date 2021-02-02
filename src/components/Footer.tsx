import {
  Box,
  Link,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { Spacer as Space } from "src/components/Spacer/Spacer";

export const Footer: FC = () => {
  return (
    <FooterBox bg="#222222" w="100%" h="242px" p="77px 50px" color="white">
      <Flex>
        <Link>企業情報</Link>
        <Space size={20} horizontal/>
        <Text>|</Text>
        <Space size={20} horizontal/>
        <Link>サイトマップ</Link>
        <Space size={20} horizontal/>
        <Text>|</Text>
        <Space size={20} horizontal/>
        <Link>個人情報の取り扱いについて</Link>
      </Flex>
      <Space size={15}/>
      <Flex>
        <Link>ご利用に関して</Link>
        <Space size={20} horizontal/>
        <Text>|</Text>
        <Space size={20} horizontal/>
        <Link>注意事項</Link>
        <Space size={20} horizontal/>
        <Text>|</Text>
        <Space size={20} horizontal/>
        <Link>ランダム映画とは</Link>
      </Flex>
    </FooterBox>
  );
};

const FooterBox = styled(Box)`
 font-size: 14px;
 bottom: 0;
`

