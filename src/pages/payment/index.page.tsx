import React from "react";
import { Text, View } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";

const Payment = () => {
  return (
    <>
      <Text>支払いページ</Text>
      <Link href={paths.verification}>確認ページへ</Link>
    </>
  );
};
export default Payment;
