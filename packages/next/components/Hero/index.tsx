import styled from "styled-components";
import { Button, Title } from "../../../shared/designSystem";
import { ButtonText } from "../Header";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const HeroTitle = styled(Title)`
  text-align: center;
  font-size: 7rem;
  text-shadow: -1px 2px 26px #662be3;
  line-height: 90px;
  margin: 0;
  margin-top: 10rem;
`;

const HeroSubtitle = styled(Title)`
  font-size: 2rem;
  padding: 2rem 0;
  letter-spacing: 3px;
  text-align: center;
`;

const HeroButton = styled(Button)`
  padding: 1.2rem 4rem;
  cursor: pointer;
  background: var(--primaryColor);
  border: none;
  width: fit-content;
  box-shadow: -1px 2px 26px var(--primaryColor);
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>UNEARTH NFTS FROM THE DEPTHS</HeroTitle>
      <HeroSubtitle>Are you prepared for this journey down under?</HeroSubtitle>
      <HeroButton>
        <ButtonText>Descend into the Nether's Den</ButtonText>
      </HeroButton>
    </HeroContainer>
  );
};

export default Hero;
