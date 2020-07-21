import React from "react";
import styled from "styled-components";

import logo from "assets/icons/logo.png";

const LogoWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-left: 10px;
`;

const LogoTitle = styled.span`
  color: #ffffff;
  font-size: 10px;
  line-height: 12px;
  display: block;
  font-weight: bold;
`;

const LogoSubTitle = styled.span`
  color: #ffffff;
  font-size: 10px;
  line-height: 12px;
`;

export default function Logo() {
    return (
        <LogoWrapper>
            <img src={logo} alt="logo"/>
            <TitleWrapper>
                <LogoTitle>Ферма Заслуженных Жирафов</LogoTitle>
                <LogoSubTitle>России и СНГ</LogoSubTitle>
            </TitleWrapper>
        </LogoWrapper>
    );
}
