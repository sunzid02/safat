import { useState } from "react";
import type { PublicationsModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import PublicationItemView from "./PublicationItemView";
import "./publication.css";

type Props = {
  publication: PublicationsModel;
};

export default function PublicationView({ publication }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="publications" className="section fade-in">
      <SectionTitleView title={publication.title} />


      {/* tech experience */}
      <div className="exp">
        <div className="exp-list">
          {publication.items.map((item, idx) => (
            <PublicationItemView
              key={`${item.title}-${item.id}`}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
