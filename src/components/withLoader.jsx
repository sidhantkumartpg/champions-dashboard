import React from "react";
import Loader from "./loader";

function WithLoader(ComponentToLoad) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <ComponentToLoad {...props} />;
    else return <Loader />;
  };
}

export default WithLoader;
