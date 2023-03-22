import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Specialization = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.specializations.map((social, index) => (
        <Button key={index}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Specialization;
