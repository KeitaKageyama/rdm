import React from "react";
import { Text, View } from "src/components/lib";
import { paths } from "src/constants/paths";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  const { title, imagePath, overview } = router.query;

  return (
    <>
      <Text>映画詳細ページだよ</Text>
      <p>{title}</p>
      <img src={`https://image.tmdb.org/t/p/w185/${imagePath}`} alt="poster" />
      <p>{overview}</p>
      <div>
        <p>監督</p>
        <p>八木竜一、山崎貴</p>
      </div>
      <div>
        <p>出演</p>
        <p>水田わさび、大原めぐみ、かかずゆみ</p>
      </div>
      <Link href={paths.random}>
        <p>ランダムで映画を見る</p>
      </Link>
    </>
  );
};
export default Detail;
