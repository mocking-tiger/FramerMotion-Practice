import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

const Wrapper = styled(DefaultWrapper)`
  width: 100%;
  height: 500vh;
`;

const Box = styled(DefaultBox)`
  position: fixed;
  top: 40%;
  left: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MotionValue2() {
  const [v, setV] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useMotionValueEvent(scrollY, "change", (value) => console.log(value));
  useMotionValueEvent(scrollYProgress, "change", (value) => setV(value));
  return (
    <Wrapper>
      <Box style={{ scale }}>
        {v === 1 && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            올해엔 제발 취업
          </motion.span>
        )}
      </Box>
    </Wrapper>
  );
}
