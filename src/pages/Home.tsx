import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "./VariantsBasic";

const HomeWrapper = styled(Wrapper)`
  background: rgba(255, 255, 255, 0.4);

  div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    text-align: left;

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <div>
        <Link to={"/variants-basic"}>01. Variants Basic</Link>
        <Link to={"/gestures"}>02. Gestures - hover & click</Link>
        <Link to={"/gestures2"}>03. Gestures - drag</Link>
      </div>
    </HomeWrapper>
  );
}
