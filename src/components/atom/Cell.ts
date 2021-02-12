import styled, { keyframes } from "styled-components";

const colorAnim = keyframes`
to {
  color: rgb(233,233,233);
  background: linear-gradient(45deg, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

const colorAnim2 = keyframes`
to {
  color: inherit;
`;

export default styled.td<{ turnOn: string }>`
  animation: ${({ turnOn }) => {
      return turnOn === "on" ? colorAnim : colorAnim2;
    }}
    0.5s forwards;
`;
