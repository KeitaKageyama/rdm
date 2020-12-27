import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";

const MoveList = () => {
  return (
    <>
      <Text>TOPページ</Text>
      <Link href={paths.detail}>映画詳細ページへ</Link>
    </>
  );
};
export default MoveList;
