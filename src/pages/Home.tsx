import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(
    135deg,
    rgba(224, 9, 153, 0.5),
    rgba(208, 14, 238, 0.5)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <Link to={"/variants-basic"}>01. Variants Basic</Link>
    </Wrapper>
  );
}
