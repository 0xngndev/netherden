import styled from "styled-components";
import { Title } from "../../../shared/designSystem";
import Card from "../../components/Card/Card";
import { motion } from "framer-motion";

const cardVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const MainPageWrapper = styled(motion.div)`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MainTitle = styled(Title)`
  text-align: center;
  font-size: 4rem;
  text-shadow: -1px 2px 26px #662be3;
  line-height: 90px;
  margin: 0;
  margin-top: 4rem;
`;

const MainPage = () => {
  return (
    <MainPageWrapper variants={cardVariants} animate="visible" initial="hidden">
      <MainTitle>Featured NFTs</MainTitle>
      <MainCardContainer>
        <Card />
        <Card />
      </MainCardContainer>
    </MainPageWrapper>
  );
};

export default MainPage;
