import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";

export const AXIONIntro: React.FC = () => {
  const frame = useCurrentFrame();

  const firstTextOpacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const firstTextOut = interpolate(
    frame,
    [55, 75],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  const secondTextOpacity = interpolate(
    frame,
    [75, 95],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const secondTextOut = interpolate(
    frame,
    [130, 150],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  const evaOpacity = interpolate(
    frame,
    [145, 175],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const pulse = 1 + Math.sin(frame * 0.08) * 0.06;

  const scale = spring({
    frame,
    fps: 30,
    config: {
      damping: 90,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020202",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Glow principal */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, rgba(0,102,255,0.08) 40%, transparent 75%)",
          filter: "blur(150px)",
          opacity: evaOpacity,
          transform: `scale(${pulse})`,
        }}
      />

      {/* Texto 1 */}
      <div
        style={{
          position: "absolute",
          color: "white",
          fontSize: 95,
          textAlign: "center",
          fontWeight: 300,
          lineHeight: 1.1,
          width: 900,
          opacity: firstTextOpacity * firstTextOut,
        }}
      >
        Las empresas
        <br />
        no fracasan.
      </div>

      {/* Texto 2 */}
      <div
        style={{
          position: "absolute",
          color: "white",
          fontSize: 85,
          textAlign: "center",
          fontWeight: 300,
          lineHeight: 1.1,
          width: 900,
          opacity: secondTextOpacity * secondTextOut,
        }}
      >
        Fracasan porque siguen
        <br />
        trabajando como en 2015.
      </div>

      {/* EVA */}
      <div
        style={{
          position: "absolute",
          opacity: evaOpacity,
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "#050505",
            border: "4px solid #00A3FF",
            boxShadow:
              "0 0 60px #00A3FF, 0 0 160px rgba(0,163,255,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 130,
            color: "white",
          }}
        >
          ✦
        </div>

        <div
          style={{
            color: "white",
            marginTop: 45,
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          EVA
        </div>

        <div
          style={{
            color: "#A0A0A0",
            marginTop: 15,
            fontSize: 42,
            fontWeight: 300,
          }}
        >
          Responde. Vende. Automatiza.
        </div>
      </div>
    </AbsoluteFill>
  );
};