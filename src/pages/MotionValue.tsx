import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";
import {
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const Box = styled(DefaultBox)`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  z-index: 1;
`;

export default function MotionValue() {
  // framer-motion의 motion value는 react의 컴포넌트를 재렌더링 하지 않음
  const x = useMotionValue(0);
  const x2 = useMotionValue(0);
  const x3 = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [0.1, 1, 2]);
  const rotateZ = useTransform(x2, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x3,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(208, 68, 203), rgb(136, 0, 79))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  // useMotionValueEvent(scale, "change", (el) => el);

  return (
    <DefaultWrapper style={{ background: gradient }}>
      <hr
        style={{
          width: "100vw",
          position: "absolute",
          borderColor: "black",
        }}
      />
      <Box drag={"x"} dragSnapToOrigin style={{ x, scale }} />
      <Box drag={"x"} dragSnapToOrigin style={{ x: x2, rotateZ }} />
      <Box drag={"x"} dragSnapToOrigin style={{ x: x3 }} />
    </DefaultWrapper>
  );
}
