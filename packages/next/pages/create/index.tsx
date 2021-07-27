import styled from "styled-components";
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
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const CreateFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

const UploadFileTitle = styled(InputTitle)`
  padding-left: 3rem;
`;

const PreviewTitle = styled(InputTitle)`
  padding-left: 3rem;
`;

const SellFormatTitle = styled(InputTitle)`
  margin-right: 2rem;
`;

const DescriptionTitle = styled(InputTitle)`
  align-self: start;
  padding-left: 3rem;
`;

const TagsTitle = styled(InputTitle)`
  padding-right: 5rem;
`;

const EndsTitle = styled(InputTitle)`
  padding-right: 5rem;
`;

const ReserveTitle = styled(InputTitle)``;

const FormatContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 3rem;
  padding-bottom: 2rem;
`;

const Tags = styled.span`
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid var(--primaryColor);
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  border-radius: 6px;
  align-self: center;
`;

const Input = styled.input`
  width: 40%;
  margin: 2rem;
  background: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: 6px;
  height: 30px;
  align-self: center;
`;

const InputDescription = styled.textarea`
  width: 50%;
  background: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: 6px;
  align-self: start;
  min-height: 100px;
  margin-left: 3rem;
  margin-bottom: 2rem;
  margin-top: 0rem;
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
        <FormatContainer>
          <SellFormatTitle>Sell Format</SellFormatTitle>
          <Tags>Auction</Tags>
          <Tags>Normal</Tags>
        </FormatContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <InputDescription />
        <FormatContainer>
          <TagsTitle>Tags</TagsTitle>
          <Input type="text" />
        </FormatContainer>
        <FormatContainer>
          <EndsTitle>Ends</EndsTitle>
          <Input type="date" />
        </FormatContainer>
        <FormatContainer>
          <ReserveTitle>Reserve Bid</ReserveTitle>
          <Input type="text" />
        </FormatContainer>
      </CreateFormContainer>
    </CreatePageWrapper>
  );
};

export default CreateNFT;
