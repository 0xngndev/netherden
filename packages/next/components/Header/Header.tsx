import styled from "styled-components";
import { Button } from "../../../shared/designSystem";
import Logo from "./Logo";
import { HeaderButtonProps } from "./types";
import Link from "next/link";
import sizes from "../../../shared/designSystem/sizes";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  flex-direction: row;
  position: sticky;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding-left: 50px;
`;

const LinksContainer = styled.div`
  display: flex;

  @media (max-width: ${sizes.lg}px) {
    display: none;
  }
`;

const NavItem = styled.h3`
  display: flex;
  align-items: center;
  padding: 0px 3rem;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  margin-right: 3rem;
`;

const ButtonText = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderButton = styled(Button)<HeaderButtonProps>`
  padding: 1.2rem 4rem;
  margin-left: 5rem;

  background: ${(props) =>
    props.hasBackground ? "var(--primaryColor)" : "transparent"};
  border: ${(props) =>
    props.hasBackground ? "none" : "1px solid var(--secondaryColor)"};

  @media (max-width: ${sizes.lg}px) {
    display: ${(props) => (props.showMobile ? "flex" : "none")};
  }
`;

const TopMenu = (hasBackground: boolean = true, showMobile: boolean = true) => {
  // async function requestAccount() {
  //   const web3Modal = new Web3Modal();
  //   const connection = await web3Modal.connect();
  //   const provider = new ethers.providers.Web3Provider(connection);
  //   const signer = await provider.getSigner();
  //   console.log(signer._address);
  // }

  const renderNavItem = (text: string, to: string = "/") => {
    return (
      <NavItem>
        <Link href={to}>{text}</Link>
      </NavItem>
    );
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LinksContainer>
        {renderNavItem("FAQ")}
        {renderNavItem("Explore")}
        {renderNavItem("About")}
      </LinksContainer>
      <ButtonContainer>
        <HeaderButton>
          <ButtonText>Get Verified</ButtonText>
        </HeaderButton>
        <HeaderButton hasBackground={hasBackground} showMobile={showMobile}>
          <ButtonText>Connect Wallet</ButtonText>
        </HeaderButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default TopMenu;
