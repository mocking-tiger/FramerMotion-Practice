import styled from "styled-components";
import { DefaultBox, DefaultWrapper } from "./VariantsBasic";

const Wrapper = styled(DefaultWrapper)``;

const Box = styled(DefaultBox)``;

export default function DefaultPage() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}
