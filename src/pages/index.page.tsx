import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";

const Top = () => {
  return (
    <>
      <Text>TOPページ</Text>
      <Link href={paths.moveList}>映画一覧へ</Link>
    </>
  );
};
export default Top;
