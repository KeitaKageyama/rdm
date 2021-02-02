import React from "react";
import { Text, View } from "src/components/lib";
import { paths } from "src/constants/paths";
import { NextPage, GetStaticProps } from "next";
import { Carousel } from "src/components/Carousel";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";

type MoveData = {
  title: string;
  poster_path: string;
};

type Props = {
  topRated: MoveData[];
  nowPlaying: MoveData[];
  popular: MoveData[];
};

const Top: NextPage<Props> = ({ topRated, nowPlaying, popular }) => {
  return (
    <>
      <Text>TOPページ</Text>
      <Link href={paths.moveList}>映画一覧へ</Link>
      <Carousel />
      {topRated.map((value: MoveData, index: number) => (
        <div key={index}>
          <p>{value.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w185/${value.poster_path}`}
            alt=""
          />
        </div>
      ))}
      {nowPlaying.map((value: MoveData, index: number) => (
        <div key={index}>
          <p>{value.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w185/${value.poster_path}`}
            alt=""
          />
        </div>
      ))}
      {popular.map((value: MoveData, index: number) => (
        <div key={index}>
          <p>{value.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w185/${value.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [
    topRatedPromise,
    popularPromise,
    nowPlayingPromise,
  ]: AxiosResponse[] = await Promise.all([
    axios.get(process.env.TOP_RATED).catch((e) => {
      throw "topRated error " + e.message;
    }),
    axios.get(process.env.POPULAR).catch((e) => {
      throw "popular error " + e.message;
    }),
    axios.get(process.env.NOW_PLAYING).catch((e) => {
      throw "nowPlaying error " + e.message;
    }),
  ]);

  const topRated = await topRatedPromise.data.results;
  const popular = await popularPromise.data.results;
  const nowPlaying = await nowPlayingPromise.data.results;

  return {
    props: {
      topRated,
      popular,
      nowPlaying,
    },
  };
};

export default Top;
