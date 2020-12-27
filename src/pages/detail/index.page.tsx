import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";

const Detail = () => {
  return (
    <>
      <Text>映画詳細</Text>
      <Link href={paths.random}>ランダムページへ</Link>
    </>
  );
};
export default Detail;
