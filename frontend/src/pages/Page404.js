import React from "react";

// Import router
import { useHistory } from "react-router-dom";

const Page404 = () => {
  const history = useHistory();
  const goBack = () => {
    history.go(-2);
  };
  return (
    <div>
      <h1>404: The page you are looking for is not available</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Page404;
