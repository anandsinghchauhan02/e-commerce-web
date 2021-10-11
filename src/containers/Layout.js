import React from "react";
import { Content } from "./index";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Content />
      </div>
     </div>
  );
};

export default Layout;
