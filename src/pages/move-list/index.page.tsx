import React from "react";
import { 
  Box,
  Flex,
  Heading,
 } from "@chakra-ui/react"
import { NextPage, GetStaticProps } from "next";
import { MovieCard } from "src/components/MovieCard";
import { Spacer as Space } from "src/components/Spacer/Spacer";
import axios, { AxiosResponse } from "axios";

type MovieData = {
  title: string;
  poster_path: string;
  original_language: string;
  overview: string;
};

type Props = {
  popular: MovieData[];
};

const MoveList: NextPage<Props> = ({ popular }) => {
  return (
    <>
      <Box maxWidth="1000px" margin="50px auto" >
        <Heading color="#FBFBFB">公開中映画</Heading>
        <Space size={15}/>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {/* 映画一覧表示 */}
          {popular.map((value: MovieData, index: number) => (
            <Box w="250px" h="350px" >
                <MovieCard
                key={index}
                title={value.title}
                imagePath={value.poster_path}
                overview={value.overview}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [
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

  return {
    props: {
      popular,
    },
  };
};

export default MoveList;
