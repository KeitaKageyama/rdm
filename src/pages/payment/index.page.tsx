import React, { FC } from "react";
import { Text } from "src/components/lib";
import Link from "next/link";
import { paths } from "src/constants/paths";

const Payment: FC = () => {
  return (
    <>
      <Text>支払いページ</Text>
      <Link href={paths.verification}>確認ページへ</Link>
    </>
  );
};
export default Payment;
