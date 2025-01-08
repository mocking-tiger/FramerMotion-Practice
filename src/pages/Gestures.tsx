import styled from "styled-components";
import { DefaultBox, Wrapper } from "./VariantsBasic";

const Box = styled(DefaultBox)``;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

export default function Gestures() {
  return (
    <Wrapper>
      {/* <Box
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 1, borderRadius: "100px" }}
      /> */}
      <Box variants={boxVariants} whileHover={"hover"} whileTap={"click"} />
    </Wrapper>
  );
}
