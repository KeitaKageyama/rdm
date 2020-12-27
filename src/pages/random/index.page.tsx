import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";

const Random = () => {
  return (
    <>
      <Text>ランダムページ</Text>
      <Link href={paths.payment}>支払いページへ</Link>
    </>
  );
};
export default Random;
