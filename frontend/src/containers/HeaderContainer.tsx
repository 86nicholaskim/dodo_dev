import React from "react";
import Header from "components/Header";
import Navigator from "components/Navigator";

import DodoistHomeIcon from "components/DodoistHomeIcon";
import TopBar from "components/TopBar";
import styled from "styled-components";

const HeaderContainerDiv = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 11000;
  position: fixed;
`;

function HeaderContainer() {
  return (
    <HeaderContainerDiv>
      <Header>
        <Navigator>
          <DodoistHomeIcon />
          <TopBar />
        </Navigator>
      </Header>
    </HeaderContainerDiv>
  );
}

export default HeaderContainer;
