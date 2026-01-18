import type React from "react";
import "./HandCameraPanel.css";

type Props = {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  handControl: boolean;
  handDetected: boolean;
  handGrabbing: boolean;
  handError: string | null;
};

export function HandCameraPanel({
  videoRef,
  canvasRef,
  handControl,
  handDetected,
  handGrabbing,
  handError,
}: Props) {
  if (!handControl) return null;

  const statusText = handDetected ? (handGrabbing ? "Grabbing" : "Tracking") : "No hand";
  const statusDotClass = handDetected ? "ok" : "err";

  return (
    <div className="tech-camera">
      <div className="camera-wrapper">
        <video
          ref={videoRef}
          className="camera-video"
          autoPlay
          playsInline
          muted
          width={320}
          height={240}
        />

        <canvas ref={canvasRef} className="camera-canvas" />

        {!handError && (
          <div className="hand-status">
            <div className={`status-dot ${statusDotClass}`} />
            <span className="hand-status-text">{statusText}</span>
          </div>
        )}

        {!handDetected && !handError && <div className="hand-hint">✋</div>}
      </div>

      {!handError && (
        <div className={`hand-message ${handDetected ? "ok" : "idle"}`}>
          <p className="hand-message-title">
            {handDetected
              ? handGrabbing
                ? "✓ Grab active. Move hand to rotate."
                : "✓ Hand detected. Pinch to grab."
              : "Show your hand to the camera"}
          </p>

          {!handDetected && (
            <p className="hand-message-subtitle">Make sure your hand is visible and well lit</p>
          )}
        </div>
      )}

      {handError && (
        <div className="hand-error">
          <p className="hand-error-title">⚠️ {handError}</p>
          <p className="hand-error-subtitle">Please allow camera access to use hand control</p>
        </div>
      )}
    </div>
  );
}
