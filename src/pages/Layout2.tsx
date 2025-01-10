import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(DefaultWrapper)``;

const Box = styled(DefaultBox)`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout2() {
  // const [isClicked, setIsClicked] = useState(false);
  // const toggle = () => setIsClicked((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  return (
    // <Wrapper onClick={toggle}>
    //   <Grid>
    //     <Box layoutId="hello" />
    //     <Box />
    //     <Box />
    //     <Box />
    //   </Grid>
    //   <AnimatePresence>
    //     {isClicked && (
    //       <Overlay
    //       initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    //       animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    //       exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    //       >
    //         <Box style={{ width: "400px", height: "200px" }} layoutId="hello" />
    //       </Overlay>
    //     )}
    //   </AnimatePresence>
    // </Wrapper>
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((num) => (
          <Box
            key={num}
            layoutId={String(num)}
            onClick={() => setId(String(num))}
          />
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box style={{ width: "400px", height: "200px" }} layoutId={id} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
