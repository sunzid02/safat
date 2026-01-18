import { useId } from "react";
import type { PublicationItem } from "../../../../model/siteModel";

type Props = {
  item: PublicationItem;
  isOpen: boolean;
  onToggle: () => void;
};

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.8 9.2a1 1 0 011.4 0L12 13l3.8-3.8a1 1 0 011.4 1.4l-4.5 4.5a1 1 0 01-1.4 0L6.8 10.6a1 1 0 010-1.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PublicationItemView({ item, isOpen, onToggle }: Props) {
  const panelId = useId();

  const bullets = [
    item.desc,
    item.url ? `DOI: ${item.url}` : "",
  ].filter(Boolean);

  return (
    <article className={`exp-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="exp-btn"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="exp-main">
          <div className="exp-title">
            <span className="exp-role">{item.title}</span>
          </div>

          <div className="exp-meta">
            <span>{item.meta}</span>
          </div>
        </div>

        <div className="exp-actions">
          <span className="exp-pill">{isOpen ? "Hide" : "Details"}</span>
          <span className="exp-chevron">
            <Chevron />
          </span>
        </div>
      </button>

      <div
        id={panelId}
        className="exp-panel"
        role="region"
        aria-label={item.title}
      >
        <div className="exp-panel-inner">
          <ul className="exp-bullets">
            {bullets.map((b, idx) => (
              <li key={`${item.id}-${idx}`}>
                {b.startsWith("DOI: ") ? (
                  <>
                    DOI:{" "}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.url}
                    </a>
                  </>
                ) : (
                  b
                )}
              </li>
            ))}
          </ul>

          {item.url && (
            <p className="card-actions" style={{ marginTop: 12 }}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {item.cta || "Open DOI"}
              </a>
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
