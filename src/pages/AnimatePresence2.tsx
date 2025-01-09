import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(DefaultWrapper)`
  button {
    position: absolute;
    bottom: 300px;
    left: 980px;
  }

  .btn2 {
    left: 900px;
  }
`;

const Box = styled(DefaultBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  position: absolute;
`;

// const boxVariants = {
//   invisible: {
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     rotateY: 360,
//     transition: {
//       duration: 1,
//     },
//   },
//   exit: {
//     x: -500,
//     opacity: 0,
//     scale: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const boxVariants2 = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    // rotateY: 360,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};

export default function AnimatePresenceComponent2() {
  const [visible, setVisivle] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const nextNumber = async () => {
    await setIsBack(false);
    setVisivle((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const prevNumber = async () => {
    await setIsBack(true);
    setVisivle((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence
      // mode="wait"
      >
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (num) =>
            visible === num && (
              <Box
                key={num}
                variants={boxVariants}
                initial="invisible"
                animate="visible"
                exit="exit"
              >
                {num}
              </Box>
            )
        )} */}
        <Box
          custom={isBack}
          key={visible}
          variants={boxVariants2}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextNumber}>next</button>
      <button className="btn2" onClick={prevNumber}>
        prev
      </button>
    </Wrapper>
  );
}
