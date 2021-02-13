import { Text, View } from "src/components/lib";
import { paths } from "src/constants/paths";
import { NextPage, GetStaticProps } from "next";
import { Carousel } from "src/components/Carousel";
import { MovieCard } from "src/components/MovieCard";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { Flex, Spacer, Box, Button, Heading, Image } from "@chakra-ui/react";
import { Spacer as Space } from "src/components/Spacer/Spacer";
import React, { useState, useEffect, FC } from "react";

type MovieData = {
  title: string;
  poster_path: string;
  original_language: string;
  overview: string;
};

type Props = {
  nowPlaying: MovieData[];
  popular: MovieData[];
  recommend: MovieData[];
};

const Top: NextPage<Props> = ({ recommend, nowPlaying, popular }) => {
  useEffect(() => {
    const inputMovie = document.getElementsByTagName("video");
    if (inputMovie && inputMovie[0]) {
      inputMovie[0].load();
    }
  }, []);

  return (
    <>
      <Text>TOPページ</Text>
      <Link href={paths.moveList}>映画一覧へ</Link>
      <Carousel />
      <Box w=" 300px" margin="0 auto">
        <video
          playsInline
          controls
          width="100%"
          src="./images/test1.mov　#t=0.001"
        />
        <Space size={100} />
        <video
          playsInline
          controls
          width="100%"
          src="./images/test2.mp4　#t=0.001"
        />
      </Box>

      {/* おすすめ表示 */}
      {/* {recommend.map((value: MovieData, index: number) => (
        <MovieCard
          key={index}
          title={value.title}
          imagePath={value.poster_path}
          overview={value.overview}
        />
      ))} */}
      {/* 公開中表示 */}
      {/* {nowPlaying.map((value: MovieData, index: number) => (
        <MovieCard
          key={index}
          title={value.title}
          imagePath={value.poster_path}
          overview={value.overview}
        />
      ))} */}
      {/* 人気の表示 */}
      {/* {popular.map((value: MovieData, index: number) => (
        <MovieCard
          key={index}
          title={value.title}
          imagePath={value.poster_path}
          overview={value.overview}
        />
      ))} */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [
    np1,
    np2,
    np3,
    np4,
    np5,
    np6,
    np7,
    np8,
    np9,
    np10,
    po1,
    po2,
    po3,
    po4,
    po5,
    po6,
    po7,
    po8,
    po9,
    po10,
  ]: AxiosResponse[] = await Promise.all([
    axios.get(process.env.NOW_PLAYING_1),
    axios.get(process.env.NOW_PLAYING_2),
    axios.get(process.env.NOW_PLAYING_3),
    axios.get(process.env.NOW_PLAYING_4),
    axios.get(process.env.NOW_PLAYING_5),
    axios.get(process.env.NOW_PLAYING_6),
    axios.get(process.env.NOW_PLAYING_7),
    axios.get(process.env.NOW_PLAYING_8),
    axios.get(process.env.NOW_PLAYING_9),
    axios.get(process.env.NOW_PLAYING_10),
    axios.get(process.env.POPULAR_1),
    axios.get(process.env.POPULAR_2),
    axios.get(process.env.POPULAR_3),
    axios.get(process.env.POPULAR_4),
    axios.get(process.env.POPULAR_5),
    axios.get(process.env.POPULAR_6),
    axios.get(process.env.POPULAR_7),
    axios.get(process.env.POPULAR_8),
    axios.get(process.env.POPULAR_9),
    axios.get(process.env.POPULAR_10),
  ]);
  // 公開中
  const np1List: MovieData[] = await np1.data.results;
  const np2List: MovieData[] = await np2.data.results;
  const np3List: MovieData[] = await np3.data.results;
  const np4List: MovieData[] = await np4.data.results;
  const np5List: MovieData[] = await np5.data.results;
  const np6List: MovieData[] = await np6.data.results;
  const np7List: MovieData[] = await np7.data.results;
  const np8List: MovieData[] = await np8.data.results;
  const np9List: MovieData[] = await np9.data.results;
  const np10List: MovieData[] = await np10.data.results;
  // 人気
  const po1List: MovieData[] = await po1.data.results;
  const po2List: MovieData[] = await po2.data.results;
  const po3List: MovieData[] = await po3.data.results;
  const po4List: MovieData[] = await po4.data.results;
  const po5List: MovieData[] = await po5.data.results;
  const po6List: MovieData[] = await po6.data.results;
  const po7List: MovieData[] = await po7.data.results;
  const po8List: MovieData[] = await po8.data.results;
  const po9List: MovieData[] = await po9.data.results;
  const po10List: MovieData[] = await po10.data.results;

  const shuffle: ([...array]: MovieData[]) => MovieData[] = ([
    ...array
  ]: MovieData[]) => {
    for (let i: number = array.length - 1; i >= 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const nowPlaying: MovieData[] = np1List
    .concat(
      np2List,
      np3List,
      np4List,
      np5List,
      np6List,
      np7List,
      np8List,
      np9List,
      np10List
    )
    .filter(
      (value: {
        original_language: string;
        poster_path: string;
        overview: string;
      }) =>
        value.original_language === "ja" &&
        value.poster_path !== null &&
        value.overview
    )
    .splice(1, 9);
  const popular: MovieData[] = po1List
    .concat(
      po2List,
      po3List,
      po4List,
      po5List,
      po6List,
      po7List,
      po8List,
      po9List,
      po10List
    )
    .filter(
      (value: {
        original_language: string;
        poster_path: string;
        overview: string;
      }) =>
        value.original_language === "ja" &&
        value.poster_path !== null &&
        value.overview
    )
    .splice(1, 9);
  const recommend: MovieData[] = shuffle([...nowPlaying, ...popular]).splice(
    1,
    9
  );

  return {
    props: {
      popular,
      nowPlaying,
      recommend,
    },
  };
};

export default Top;
