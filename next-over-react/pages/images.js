import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import BGImage from "../component/BGImage";

const BgImage = dynamic(() => import("../component/BGImage"), { ssr: false });

const Wrapper = styled.div``;

const ImagePage = () => {
  return (
    <Wrapper>
      <BGImage />
    </Wrapper>
  );
};

export default ImagePage;
