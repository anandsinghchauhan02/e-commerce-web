import React from "react";

const Home = React.lazy(() => import("./home/Home"));
const Product = React.lazy(() => import("./components/viewProduct"));
const BuyProduct = React.lazy(() => import("./components/buyProduct"));


const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/:id", exact: true, name: "Product", component: Product },
  { path: "/buy/:id", exact: true, name: "BuyProduct", component: BuyProduct },
];

export default routes;
