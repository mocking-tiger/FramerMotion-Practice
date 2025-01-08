import styled from "styled-components";
import { DefaultBox, Wrapper } from "./VariantsBasic";
import { useRef } from "react";

const Box = styled(DefaultBox)`
  width: 100px;
  height: 100px;
`;

const BiggerBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default function Gestures2() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <Box
        drag
        whileDrag={{
          backgroundColor: "rgb(99, 110, 114)",
        }}
      />
      <Box
        drag="x"
        whileDrag={{
          backgroundColor: "rgb(253, 203, 110)",
        }}
      />
      <Box
        drag="y"
        whileDrag={{
          backgroundColor: "rgb(129, 236, 236)",
        }}
      />
      {/* <Box
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileDrag={{
          backgroundColor: "rgb(232, 67, 147)",
        }}
      /> */}
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={1}
        />
      </BiggerBox>
    </Wrapper>
  );
}
