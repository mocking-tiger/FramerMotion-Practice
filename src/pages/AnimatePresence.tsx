import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Wrapper = styled(DefaultWrapper)`
  button {
    position: absolute;
    bottom: 300px;
  }
`;

const Box = styled(DefaultBox)``;

const boxVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};

export default function AnimatePresenceComponent() {
  const [isShowing, setIsShowing] = useState(false);
  const toggleShowing = () => setIsShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {isShowing && (
          <Box
            variants={boxVariant}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
