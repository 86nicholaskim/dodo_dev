import React from "react";
import Header from "components/Header";
import Navigator from "components/Navigator";
import AuthContainer from "./AuthContainer";
import Introduce from "components/Introduce";
import Dodoist from "components/Dodoist";

function HeaderContainer() {
  return (
    <div>
      <Header>
        <Navigator>
          <Dodoist />

          <div>
            <Introduce />
            <AuthContainer />
          </div>
        </Navigator>
      </Header>
    </div>
  );
}

export default HeaderContainer;
