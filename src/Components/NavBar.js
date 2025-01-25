import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #0f3164;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  font-family: "Courier New", monospace;
  height: 50px;
  cursor: pointer;
`;

const Logo = styled.div`
  font-size: 1.3rem;
  margin-left: 18px;
`;

const Links = styled.div`
  display: flex;
`;

const List = styled.p`
  margin-left: 35px;
  margin-right: 15px;
`;

const NavBar = () => {
  return (
    <Header>
      <Logo>
        <p href="/">IRCTC</p>
      </Logo>
      <Links>
        <List>Home</List>
        <List>Login</List>
        <List>Register</List>
      </Links>
    </Header>
  );
};

export default NavBar;
