import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(90vh)] ">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Loader;
