import React from "react";
import Header from "components/Header";
import Navigator from "components/Navigator";
import AuthContainer from "./AuthContainer";
import Introduce from "components/Introduce";
import Dodoist from "../components/Dodoist";
import { Link } from "react-router-dom";

function HeaderContainer() {
  return (
    <div>
      <Header>
        <Navigator>
          <Link to="/">
            <Dodoist />
          </Link>

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
