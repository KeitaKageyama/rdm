import React, { useEffect } from "react";
import { NextPage, GetStaticProps } from "next";

const MoveList: NextPage = () => {
  useEffect(() => {
    window.location.replace(
      "https://play.google.com/store/apps/details?id=com.month"
    );
  }, []);
  return <></>;
};

export default MoveList;
