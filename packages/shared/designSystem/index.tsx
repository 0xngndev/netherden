import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  outline: none !important;

  &:active,
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;
