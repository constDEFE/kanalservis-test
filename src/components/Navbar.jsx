import { useDispatch, useSelector } from "react-redux";
import { devices } from "../utils/resolutions";
import { logout } from "../redux/actions/actions";
import LogoutImg from "../assets/logout.svg";
import LogoFull from "../assets/logo__full.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.svg";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

const LogoutImage = styled.img`
  filter: invert(25%) sepia(99%) saturate(886%) hue-rotate(191deg)
    brightness(91%) contrast(88%);
  cursor: pointer;
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  display: none;

  @media ${devices.desktop} {
    display: block;
  }
`;

const MobileLogo = styled.img`
  display: block;

  @media ${devices.tablet} {
    display: none;
  }
`;

const MediumLogo = styled.img`
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
`;

const StyledNav = styled.nav`
  height: 118px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e4b062;
  position: fixed;
  z-index: 10;
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${devices.tablet} {
    padding-left: 2.5rem;
    padding-right: 2.25rem;
  }
`;

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <StyledNav>
      <Link to={"/"}>
        <MobileLogo draggable={false} src={Logo} alt={"/"} />
        <MediumLogo draggable={false} src={LogoFull} alt={"/"} />
      </Link>
      {user && (
        <UserContainer>
          <UserName>Username</UserName>
          <LogoutImage
            onClick={handleLogout}
            draggable={false}
            src={LogoutImg}
            alt={"/"}
          />
        </UserContainer>
      )}
    </StyledNav>
  );
};

export default Navbar;
