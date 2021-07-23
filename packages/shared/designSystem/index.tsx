import styled from "styled-components";

export const Button = styled.button`
  font-family: Miriam Libre;
  width: 100%;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;
