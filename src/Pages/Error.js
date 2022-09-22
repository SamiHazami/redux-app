import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Nothing here please come back to the home page!
      <button>
        <Link to="/">Back to Home 😎 </Link>
      </button>
    </div>
  );
};

export default Error;
