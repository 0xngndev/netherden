import styled from "styled-components";
import { Title } from "../../../shared/designSystem";
import Card from "../../components/Card/Card";

const MainPageWrapper = styled.div`
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
    <MainPageWrapper>
      <MainTitle>Featured NFTs</MainTitle>
      <MainCardContainer>
        <Card />
      </MainCardContainer>
    </MainPageWrapper>
  );
};

export default MainPage;
