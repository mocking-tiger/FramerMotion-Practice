import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";

const Box = styled(DefaultBox)``;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

export default function Gestures() {
  return (
    <DefaultWrapper>
      {/* <Box
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 1, borderRadius: "100px" }}
      /> */}
      <Box variants={boxVariants} whileHover={"hover"} whileTap={"click"} />
    </DefaultWrapper>
  );
}
