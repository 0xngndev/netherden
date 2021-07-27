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
  border: 1px solid var(--primaryColor);
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
  text-align: center;
  font-size: 2rem;
  text-shadow: -1px 2px 26px #662be3;
  line-height: 90px;
  margin: 0;
  margin-top: 4rem;
`;

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
  width: 100%;
  padding: 2rem;
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
        <InputTitle>Upload your file</InputTitle>
        <InputTitle>Preview</InputTitle>
        <FormatContainer>
          <InputTitle>Sell Format</InputTitle>
          <Tags>Auction</Tags>
          <Tags>Normal</Tags>
        </FormatContainer>
        <InputTitle>Description</InputTitle>
        <Input type="text" />
        <FormatContainer>
          <InputTitle>Tags</InputTitle>
          <Input type="text" />
        </FormatContainer>
        <FormatContainer>
          <InputTitle>Ends</InputTitle>
          <Input type="date" />
        </FormatContainer>
        <FormatContainer>
          <InputTitle>Reserve Bid</InputTitle>
          <Input type="text" />
        </FormatContainer>
      </CreateFormContainer>
    </CreatePageWrapper>
  );
};

export default CreateNFT;
