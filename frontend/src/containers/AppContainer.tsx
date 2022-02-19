import React, { useEffect, useState } from "react";
import styled from "styled-components";

import App from "../components/App";
import DodoContainer from "../containers/DodoContainer";
import MainPageRouter from "components/MainPageRouter";

const StyledAppContainer = styled.div`
  overflow: hidden;
`;

function AppContainer() {
  // 로그인상태면 로그인 후 페이지로 이동. 아니면 메인페이지로 이동

  let [isAuth, setAuth] = useState(false);
  useEffect(() => {
    if (
      isAuth == false &&
      confirm("로그인 후 dodo보기[확인] / 메인페이지보기 [취소]")
    ) {
      setAuth(true);
    }
  });

  return (
    <>
      <StyledAppContainer>
        {isAuth == false ? (
          <>
            <MainPageRouter />
          </>
        ) : (
          <App />
        )}
      </StyledAppContainer>
    </>
  );
}

export default AppContainer;
