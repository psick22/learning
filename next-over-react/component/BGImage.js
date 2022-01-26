import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const BGImage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        src={`https://source.unsplash.com/${width}x${height}/?nature,water,mountains,landscape`}
        width={width}
        height={height}
        // placeholder="blur"
        alt=""
        priority
      />
    );
  }
  return null;
};

export default BGImage;
