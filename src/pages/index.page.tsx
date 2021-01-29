import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";
import { Header } from "src/components/Header";

const Top = () => {
  return (
    <>
      <Header />
      <Text>TOPページ</Text>
      <Link href={paths.moveList}>映画一覧へ</Link>
    </>
  );
};
export default Top;
