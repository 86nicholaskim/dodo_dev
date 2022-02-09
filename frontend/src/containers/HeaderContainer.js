import React from "react";
import Header from "components/Header";
import Navigator from "components/Navigator";
import AuthContainer from "./AuthContainer";
import Introduce from "components/Introduce";

function HeaderContainer() {
  return (
    <div>
      <Header>
        <Navigator>
          <a>dodo</a>
          <div>
            <Introduce />
            <AuthContainer />
            <AuthContainer />
          </div>
        </Navigator>
      </Header>
    </div>
  );
}

export default HeaderContainer;
