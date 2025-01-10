import styled from "styled-components";
import { Link } from "react-router-dom";
import { DefaultWrapper } from "./VariantsBasic";

const HomeWrapper = styled(DefaultWrapper)`
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
        <Link to={"/motion-value"}>04. MotionValue - drag</Link>
        <Link to={"/motion-value2"}>05. MotionValue - scroll</Link>
        <Link to={"/svg"}>06. SVG Animation</Link>
        <Link to={"/animate-presence"}>07. Animate presence - basic</Link>
        <Link to={"/animate-presence2"}>08. Animate presence - slider</Link>
        <Link to={"/layout-animation"}>09. Layout Animation</Link>
        <Link to={"/layout-animation2"}>10. Layout Animation2</Link>
      </div>
    </HomeWrapper>
  );
}
