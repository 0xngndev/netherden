import styled from "styled-components";
import { Button } from "../../../shared/designSystem";
import Logo from "./Logo";
import { HeaderButtonProps } from "./types";
import Link from "next/link";
import sizes from "../../../shared/designSystem/sizes";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  flex-direction: row;
  position: sticky;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerContainer = styled.div`
  display: none;

  @media (max-width: ${sizes.md}px) {
    margin-right: 5rem;
    display: flex;
    & svg {
      height: 25px;
      width: 25px;
    }
  }
`;

const LogoContainer = styled.div`
  padding-left: 50px;
`;

const LogoText = styled.h1`
  font-size: 5rem;
  color: var(--primaryColor);
  text-shadow: -1px 2px 26px #662be3;
`;

const LinksContainer = styled.div`
  display: flex;

  @media (max-width: ${sizes.md}px) {
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
  margin-right: 5rem;

  background: ${(props) =>
    props.hasBackground ? "var(--primaryColor)" : "transparent"};
  border: ${(props) =>
    props.hasBackground ? "none" : "1px solid var(--secondaryColor)"};
  box-shadow: ${(props) =>
    props.hasBackground ? "-1px 2px 26px #662be3" : "none"};

  @media (max-width: ${sizes.md}px) {
    display: none;
  }
`;

const TopMenu = (hasBackground: boolean = true) => {
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
        {/* <Logo /> */}
        <LogoText>NETHERDEN</LogoText>
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
        <HeaderButton hasBackground={hasBackground}>
          <ButtonText>Connect Wallet</ButtonText>
        </HeaderButton>
      </ButtonContainer>
      <HamburgerContainer>
        <AiOutlineMenu />
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default TopMenu;
