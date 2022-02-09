import React from "react";

import MainPageRouter from "components/MainPageRouter";

function App() {
  var isAuth = false;

  return (
    <>
      {isAuth == false ? (
        <>
          <MainPageRouter />
        </>
      ) : (
        <div>투두메인페이지</div>
      )}
    </>
  );
}

export default App;
