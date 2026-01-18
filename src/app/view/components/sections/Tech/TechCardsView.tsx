import type { TechModel } from "../../../../model/siteModel";
import "./TechCards.css";

type Props = { tech: TechModel };

export default function TechCardsView({ tech }: Props) {
  const faces = tech.faces.slice(0, 6);

  return (
    <div className="tech-cards-wrap">
      <div className="tech-cards-grid">
        {faces.map((f) => (
          <article key={f.title} className="tech-card">
            <div className="tech-card-bg" />
            <div className="tech-card-inner">
              <header className="tech-card-head">
                <h3 className="tech-card-title">{f.title}</h3>
                {f.badge && <span className="tech-card-badge">{f.badge}</span>}
              </header>

              <div className="tech-card-items">
                {f.items.map((it) => (
                  <span key={it} className="tech-card-chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

