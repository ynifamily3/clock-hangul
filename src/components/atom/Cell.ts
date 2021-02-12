import styled from "styled-components";

export default styled.td<{ color?: string }>`
  color: ${({ color }) => color};
`;
