import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
  return (
    <div data-section id="experiences" className="mb-16 group">
      <h2 className="mb-8 visible font-medium tracking-widest">
        Experiences
      </h2>
      {props.data.map(function (object, index) {
        return (
          <ExperienceItem
            key={`${object.title}+${object.company}+${object.startDate}+${index}`}
            title={object.title}
            company={object.company}
            location={object.location}
            href={object.href}
            startDate={object.startDate}
            endDate={object.endDate}
            description={object.description}
            logo={object.logo}
            skills={object.skills}
          />
        );
      })}
    </div>
  );
};

export default Experiences;
