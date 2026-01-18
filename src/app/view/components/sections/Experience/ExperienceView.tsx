import { useState } from "react";
import type { ExperienceModel, LeadershipExperienceModel } from "../../../../model/siteModel";
import type { ResearchExperienceModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import ExperienceItemView from "./ExperienceItemView";
import "./experience.css";

type Props = {
  experience: ExperienceModel;
  researchExperience: ResearchExperienceModel;
  leadershipExperience: LeadershipExperienceModel;
};

export default function ExperienceView({ experience, researchExperience, leadershipExperience }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section fade-in">
      <SectionTitleView title={experience.title} />


      {/* tech experience */}
      <div className="exp">
        <div className="exp-list">
          {experience.items.map((item, idx) => (
            <ExperienceItemView
              key={`${item.title}-${item.when}`}
              title={item.title}
              when={item.when}
              bullets={item.bullets}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>


      {/* researchExperience */}
      <div style={{ marginTop: "5rem" }}></div>

      <SectionTitleView title={researchExperience.title}/>
      <div className="exp" >
        <div className="exp-list">
          {researchExperience.items.map((item, idx) => (
            <ExperienceItemView
              key={`${item.title}-${item.when}`}
              title={item.title}
              when={item.when}
              bullets={item.bullets}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>

      {/* leadershipExperience */}
      <div style={{ marginTop: "5rem" }}></div>

      <SectionTitleView title={leadershipExperience.title}/>
      <div className="exp" >
        <div className="exp-list">
          {leadershipExperience.items.map((item, idx) => (
            <ExperienceItemView
              key={`${item.title}-${item.when}`}
              title={item.title}
              when={item.when}
              bullets={item.bullets}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>



    </section>
  );
}
