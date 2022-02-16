import React from "react";
import DodoContainer from "../containers/DodoContainer";
import MainPageRouter from "components/MainPageRouter";

const App = (): JSX.Element => {
  var isAuth = false;
  if (confirm("로그인 후 dodo보기[확인] / 메인페이지보기 [취소]")) {
    isAuth = true;
  }
  debugger;
  return (
    <>
      {isAuth == false ? (
        <>
          <MainPageRouter />
        </>
      ) : (
        <DodoContainer />
      )}
    </>
  );
};

export default App;
