import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Specialization = ({
                            className,
                            handleGraphicsScroll,
                            handleIllustrationScroll,
                            handlePaintingScroll,
                            handleGraphicsTabletRefScroll,
                            handleWatercolorScroll
                        }) => {
    const map = new Map();
    map.set("1", handlePaintingScroll);
    map.set("2", handleWatercolorScroll)
    map.set("3", handleIllustrationScroll);
    map.set("4", handleGraphicsScroll);
    map.set("5", handleGraphicsTabletRefScroll);

    return (
        <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
            {yourData.specializations.map((specialization, index) => (
                <Button onClick={map.get(specialization.id)} key={index}>
                    {specialization.title}
                </Button>
            ))}
        </div>
    );
};

export default Specialization;
