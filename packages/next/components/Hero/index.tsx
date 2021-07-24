import styled from "styled-components";
import { Title } from "../../../shared/designSystem";
import { ButtonText } from "../Header";
import { motion } from "framer-motion";

const buttonVariants = {
  visible: {
    y: 10,
    transition: {
      yoyo: Infinity,
      delay: 7,
      duration: 0.8,
      type: "spring",
    },
  },
};

const heroVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const HeroContainer = styled(motion.div)`
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
  padding: 3rem 0;
  letter-spacing: 3px;
  text-align: center;
`;

const HeroButton = styled(motion.button)`
  padding: 1.2rem 4rem;
  cursor: pointer;
  background: var(--primaryColor);
  border: none;
  width: fit-content;
  border-radius: 6px;
  box-shadow: -1px 2px 26px var(--primaryColor);
`;

const Hero = () => {
  return (
    <HeroContainer variants={heroVariants} animate="visible" initial="hidden">
      <HeroTitle>UNEARTH NFTS FROM THE DEPTHS</HeroTitle>
      <HeroSubtitle>Are you prepared for this journey down under?</HeroSubtitle>
      <HeroButton variants={buttonVariants} animate="visible" initial="hidden">
        <ButtonText>Descend into the Nether's Den</ButtonText>
      </HeroButton>
    </HeroContainer>
  );
};

export default Hero;
