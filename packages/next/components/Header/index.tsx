import styled from "styled-components";
import { Button } from "../../../shared/designSystem";
import Logo from "./Logo";
import { HeaderButtonProps, SideMenuAbsoluteWrapperProps } from "./types";
import Link from "next/link";
import sizes from "../../../shared/designSystem/sizes";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const headerVariants = {
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

const SideMenuAbsoluteWrapper = styled(
  motion.div
)<SideMenuAbsoluteWrapperProps>`
  display: none;

  @media (max-width: ${sizes.md}px) {
    display: flex;
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background-color: var(--bgColor);

    & svg {
      position: absolute;
      top: 35px;
      right: 50px;
      height: 30px;
      width: 30px;
      color: var(--primaryColor);
      text-shadow: -1px 2px 26px #662be3;
    }
  }
`;

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & a {
    color: var(--primaryColor);
    text-shadow: -1px 2px 26px #662be3;
    font-size: 2rem;
  }
`;

const HeaderContainer = styled(motion.div)`
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
  cursor: pointer;
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

  & a {
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  margin-right: 3rem;
`;

export const ButtonText = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderButton = styled(Button)<HeaderButtonProps>`
  margin-right: 5rem;
  padding: 1.2rem 4rem;
  cursor: pointer;

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

const Header = (hasBackground: boolean = true) => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const router = useRouter();

  // async function requestAccount() {
  //   const web3Modal = new Web3Modal();
  //   const connection = await web3Modal.connect();
  //   const provider = new ethers.providers.Web3Provider(connection);
  //   const signer = await provider.getSigner();
  //   console.log(signer._address);
  // }

  const onToggleSideMenu = () => {
    setToggleSideMenu(!toggleSideMenu);
  };

  const renderNavItem = (text: string, to: string = "/") => {
    return (
      <NavItem>
        <Link href={to}>{text}</Link>
      </NavItem>
    );
  };

  return (
    <>
      <HeaderContainer
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <LogoContainer>
          {/* <Logo /> */}
          <LogoText onClick={() => router.push("/")}>NETHERDEN</LogoText>
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
          <AiOutlineMenu onClick={onToggleSideMenu} />
        </HamburgerContainer>
      </HeaderContainer>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {toggleSideMenu && (
          <SideMenuAbsoluteWrapper
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <AiOutlineClose onClick={onToggleSideMenu} />
            <SideMenuWrapper>
              {renderNavItem("FAQ")}
              {renderNavItem("Explore")}
              {renderNavItem("About")}
            </SideMenuWrapper>
          </SideMenuAbsoluteWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
