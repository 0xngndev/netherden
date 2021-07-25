import styled from "styled-components";
import { Title } from "../../../shared/designSystem";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 6px;
`;

const ImageWrapper = styled.div`
  height: 50%;
  border-radius: 6px;
`;

const CardTitle = styled(Title)``;

const CardTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardTags = styled.span`
  font-size: 1rem;
  border: 1px solid var(--primaryColor);
  padding: 1rem 2rem;
  margin-right: 1rem;
  border-radius: 6px;
`;

const UsernameWrapper = styled(CardTagsWrapper)``;

const UsernameText = styled(Title)`
  font-size: 1rem;
  color: var(--gray);
  margin-left: 1rem;
  text-transform: none;
`;

const PriceWrapper = styled(CardTagsWrapper)``;

const PriceText = styled(UsernameText)``;

const EndsInWrapper = styled(CardTagsWrapper)``;

const EndsInText = styled(UsernameText)``;

const Card = () => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <h1>Hello</h1>
      </ImageWrapper>
      <CardTitle>Hello</CardTitle>
      <CardTagsWrapper>
        <CardTags>Featured</CardTags>
        <CardTags>Auction</CardTags>
      </CardTagsWrapper>
      <UsernameWrapper>
        <UsernameText>fundsafu</UsernameText>
      </UsernameWrapper>
      <PriceWrapper>
        <PriceText>Price</PriceText>
      </PriceWrapper>
      <EndsInWrapper>
        <EndsInText>Ends in</EndsInText>
      </EndsInWrapper>
    </CardWrapper>
  );
};

export default Card;
