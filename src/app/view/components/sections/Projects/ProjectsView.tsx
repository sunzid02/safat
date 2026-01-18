import type { ProjectsModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import CardView from "../../ui/Card/CardView";
import FlipBookView from "../../ui/FlipBook/FlipBookView";
// import "./flipbook-premium.css";

type Props = {
  projects: ProjectsModel;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function ProjectsView({ projects }: Props) {
  // 3 cards per page
  const pagesData = chunk(projects.items, 3);

  const pages = pagesData.map((group, pageIdx) => (
    <div key={`projects-page-${pageIdx}`} className="grid">
      {group.map((p) => (
        <CardView key={p.title} title={p.title} subtitle={p.meta}>
          <p>{p.desc}</p>

          {(p.url || p.demo || p.rpaper) && (
            <div className="card-actions">
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer">
                  View Project
                </a>
              )}

              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Watch Demo
                </a>
              )}

              {p.rpaper && (
                <a href={p.rpaper} target="_blank" rel="noreferrer">
                  Research Paper
                </a>
              )}
            </div>
          )}
        </CardView>
      ))}
    </div>
  ));

  return (
    <section id="projects" className="section fade-in">
      <SectionTitleView title={projects.title} subtitle={projects.intro} />

      <FlipBookView id="projects-flipbook" pages={pages} />
    </section>
  );
}