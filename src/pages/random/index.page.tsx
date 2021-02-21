import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";
import { Select } from "@chakra-ui/react";

const Random = () => {
  return (
    <>
      <Text>ランダムページ</Text>
      <Link href={paths.payment}>支払いページへ</Link>
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
    </>
  );
};
export default Random;
