import React, { useMemo } from "react";
import type { MutableRefObject } from "react";
import "./TechStage.css";

type Face = {
  title: string;
  badge?: string;
  items: string[];
};

type Props = {
  rx: number;
  ry: number;
  faces: Face[];
  active: number;
  handControl: boolean;
  handGrabbing: boolean;
  drag: MutableRefObject<{ on: boolean }>;
  setIsInteracting: (v: boolean) => void;
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: () => void;
};

const EMPTY_FACE: Face = { title: "", items: [] };

function ensureSixFaces(input: Face[]) {
  const out = input.slice(0, 6);
  while (out.length < 6) out.push(EMPTY_FACE);
  return out;
}

export function TechStage({
  rx,
  ry,
  faces,
  active,
  handControl,
  handGrabbing,
  drag,
  setIsInteracting,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: Props) {
  const cubeFaces = useMemo(() => ensureSixFaces(faces), [faces]);

  return (
    <div className="tech-stage">
      <div
        className="scene"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <div
          className="tech-cube"
          style={{
            transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
            transition: drag.current.on
              ? "none"
              : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {cubeFaces.map((face, i) => (
            <div
              key={`${face.title || "face"}-${i}`}
              className={`tech-face tech-face-${i} ${
                active === i ? "is-active" : ""
              }`}
            >
              {/* Water layer (needed for your CSS) */}
              <div className="water-bg" />

              {/* Content */}
              <div className="tech-face-inner">
                {(face.title || face.badge) && (
                  <div className="tech-face-head">
                    <h3>{face.title}</h3>
                    {face.badge && (
                      <span className="tech-face-badge">{face.badge}</span>
                    )}
                  </div>
                )}

                <div className="tech-face-items">
                  {face.items.map((it) => (
                    <span key={it} className="tech-chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="tech-tip">
        {handControl
          ? handGrabbing
            ? "Pinch = grabbing. Move your hand to rotate."
            : "Pinch thumb + index to grab the cube."
          : "Drag the cube to rotate • Click tabs to view each side"}
      </p>
    </div>
  );
}
