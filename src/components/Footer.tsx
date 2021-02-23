import { Box, Link, Text, Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";
import styled from "styled-components";
import { Spacer as Space } from "src/components/Spacer/Spacer";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

export const Footer: FC = () => {
  return (
    <FooterBox bg="black" w="100%" h="242px" p="77px 50px" color="white">
      <Flex>
        <Link>企業情報</Link>
        <Space size={20} horizontal />
        <Text>|</Text>
        <Space size={20} horizontal />
        <Link>サイトマップ</Link>
        <Space size={20} horizontal />
        <Text>|</Text>
        <Space size={20} horizontal />
        <Link>個人情報の取り扱いについて</Link>
      </Flex>
      <Space size={15} />
      <Flex>
        <Link>ご利用に関して</Link>
        <Space size={20} horizontal />
        <Text>|</Text>
        <Space size={20} horizontal />
        <Link>注意事項</Link>
        <Space size={20} horizontal />
        <Text>|</Text>
        <Space size={20} horizontal />
        <Link>ランダム映画とは</Link>
      </Flex>
      <Space size={15} />
      <Flex>
        <IconButton
          variant="link"
          fontSize="25px"
          color="white"
          aria-label="FacebookIcon"
          icon={<Icon as={IoLogoFacebook} />}
        />
        <Space size={15} horizontal />
        <IconButton
          variant="link"
          fontSize="25px"
          color="white"
          aria-label="TwitterIcon"
          icon={<Icon as={IoLogoTwitter} />}
        />
        <Space size={15} horizontal />
        <IconButton
          variant="link"
          fontSize="25px"
          color="white"
          aria-label="InstagramIcon"
          icon={<Icon as={IoLogoInstagram} />}
        />
      </Flex>
      <Flex>
        <Copy>©RANDUM MOVIE</Copy>
      </Flex>
    </FooterBox>
  );
};

const FooterBox = styled(Box)`
  font-size: 14px;
  bottom: 0;
`;
const Copy = styled(Text)`
  margin: 0 auto;
`;
