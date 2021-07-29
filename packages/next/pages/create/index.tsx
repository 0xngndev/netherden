import styled from "styled-components";
import sizes from "../../../shared/designSystem/sizes";
import { Title } from "../../../shared/designSystem";
import { motion } from "framer-motion";

const formVariants = {
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

const CreatePageWrapper = styled(motion.div)`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: ${sizes.lg}px) {
    width: 80%;
  }
`;

const CreateFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid var(--primaryColor);
  box-shadow: -1px 2px 36px #662be3;
  border-radius: 6px;
  margin-bottom: 2rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
  padding-right: 4rem;
  padding-left: 4rem;
  /* border: 1px solid var(--primaryColor); */
`;

const CreateTitle = styled(Title)`
  text-align: center;
  font-size: 4rem;
  text-shadow: -1px 2px 26px #662be3;
  line-height: 90px;
  margin: 0;
  margin-top: 4rem;
`;

const InputTitle = styled(Title)`
  align-self: start;
  font-size: 1.5rem;
  text-shadow: -1px 2px 26px #662be3;
  line-height: 90px;
  margin: 0;
`;

const UploadFileTitle = styled(InputTitle)``;

const PreviewTitle = styled(InputTitle)``;

const SellFormatTitle = styled(InputTitle)`
  line-height: 45px;
`;

const DescriptionTitle = styled(InputTitle)`
  align-self: start;

  line-height: 45px;
`;

const TagsTitle = styled(InputTitle)`
  align-self: start;

  line-height: 45px;
`;

const EndsTitle = styled(InputTitle)`
  align-self: start;

  line-height: 45px;
`;

const ReserveTitle = styled(InputTitle)`
  align-self: start;

  line-height: 45px;
`;

const FormatContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Tags = styled.span`
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid var(--primaryColor);
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  border-radius: 6px;
  align-self: center;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  margin: 2rem;
  background: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: 6px;
  height: 30px;
  align-self: start;
  margin-left: 0rem;
  margin-top: 0rem;

  ::placeholder {
    font-family: "Miriam Libre";
    padding-left: 1rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px #662be3;
  }
`;

const InputDescription = styled.textarea`
  width: 100%;
  background: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: 6px;
  align-self: start;
  min-height: 100px;

  margin-bottom: 2rem;
  margin-top: 0rem;

  ::placeholder {
    font-family: "Miriam Libre";
    padding-top: 0.5rem;
    padding-left: 1rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px #662be3;
  }
`;

const CreateNFT = () => {
  return (
    <CreatePageWrapper
      variants={formVariants}
      animate="visible"
      initial="hidden"
    >
      <CreateTitle>Create NFT</CreateTitle>
      <CreateFormContainer>
        <UploadFileTitle>Upload your file</UploadFileTitle>
        <PreviewTitle>Preview</PreviewTitle>
        <SellFormatTitle>Sell Format</SellFormatTitle>
        <FormatContainer>
          <Tags>Auction</Tags>
          <Tags>Normal</Tags>
        </FormatContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <InputDescription placeholder="What a wonderful world" />

        <TagsTitle>Tags</TagsTitle>
        <Input type="text" placeholder="Fantasy" />

        <EndsTitle>Ends</EndsTitle>
        <Input type="date" />

        <ReserveTitle>Reserve Bid</ReserveTitle>
        <Input type="text" placeholder="20 MATIC" />
      </CreateFormContainer>
    </CreatePageWrapper>
  );
};

export default CreateNFT;
