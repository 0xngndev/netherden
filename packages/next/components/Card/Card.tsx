import styled from "styled-components";
import { Title } from "../../../shared/designSystem";
import Image from "next/image";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 6px;
  border: 1px solid var(--primaryColor);
  box-shadow: -1px 2px 40px var(--primaryColor);
  margin-bottom: 10rem;
`;

const ImageWrapper = styled.div`
  height: 50%;
  border-radius: 6px 6px 0px 0px;
  margin-bottom: 1rem;

  & img {
    border-radius: 6px;
  }
`;

const CardTitle = styled(Title)`
  margin: 0;
  text-transform: none;
  text-shadow: -1px 2px 40px var(--primaryColor);
  align-self: start;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  max-width: 350px;
  line-height: 45px;
`;

const CardTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 3rem;
  padding-bottom: 2rem;
`;

const CardTags = styled.span`
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid var(--primaryColor);
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  border-radius: 6px;
  align-self: center;
`;

const UsernameWrapper = styled(CardTagsWrapper)`
  padding-left: 2rem;
  margin-left: 2rem;

  & img {
    border-radius: 4rem;
  }
`;

const UsernameText = styled(Title)`
  font-size: 1.2rem;
  color: var(--gray);
  margin-left: 1rem;
  text-transform: none;
`;

const PriceWrapper = styled(CardTagsWrapper)`
  padding-left: 2rem;
`;

const PriceText = styled(UsernameText)`
  color: white;
  font-size: 1.2rem;
`;

const PriceTag = styled(CardTags)`
  margin-left: 2rem;
  padding: 0.25rem 2rem;
  border: none;
  font-size: 1.25rem;
  background-color: var(--primaryColor);
  box-shadow: -1px 2px 15px var(--primaryColor);
`;

const EndsInWrapper = styled(CardTagsWrapper)`
  padding-left: 2rem;
`;

const EndsInText = styled(UsernameText)`
  padding-right: 1.5rem;
  color: white;
  font-size: 1.2rem;
`;

const EndsInTag = styled(CardTags)`
  font-size: 1.2rem;
`;

const Card = () => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src="/images/testnft.jpg" height={350} width={350} />
      </ImageWrapper>
      <CardTagsWrapper>
        <CardTags>Featured</CardTags>
        <CardTags>Auction</CardTags>
      </CardTagsWrapper>
      <UsernameWrapper>
        <Image src="/images/testnft.jpg" height={20} width={40} />
        <UsernameText>fundsafu</UsernameText>
      </UsernameWrapper>
      <CardTitle>Of dreams above</CardTitle>
      <PriceWrapper>
        <PriceText>Price</PriceText>
        <PriceTag>20 MATIC</PriceTag>
      </PriceWrapper>
      <EndsInWrapper>
        <EndsInText>Ends in</EndsInText>
        <EndsInTag>20</EndsInTag>
        <EndsInTag>20</EndsInTag>
        <EndsInTag>20</EndsInTag>
      </EndsInWrapper>
    </CardWrapper>
  );
};

export default Card;
