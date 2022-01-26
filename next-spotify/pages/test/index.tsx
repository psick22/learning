import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

const testAtom2 = atom({
  key: "test",
  default: 0,
});

const TestPage = () => {
  const [value, setValue] = useState("");
  const [test, setTest] = useRecoilState(testAtom2);

  const handleChange = () => {
    setTest(test + 1);
  };

  useEffect(() => {
    console.log("render");
  }, [test, value]);
  return (
    <>
      <p>{test}</p>
      <button onClick={() => setTest(test + 1)}>증가</button>
    </>
  );
};

export default TestPage;
