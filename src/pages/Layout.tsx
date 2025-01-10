import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(DefaultWrapper)``;

const Box = styled(DefaultBox)`
  width: 400px;
  height: 400px;
  display: flex;
`;

const Box2 = styled(Box)`
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function Layout() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClicked = () => setIsClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: isClicked ? "center" : "flex-start",
          alignItems: isClicked ? "center" : "flex-start",
        }}
      >
        <Circle layout />
      </Box>
      <Box2>{!isClicked && <Circle layoutId="circle" />}</Box2>
      <Box2>{isClicked && <Circle layoutId="circle" />}</Box2>
    </Wrapper>
  );
}
