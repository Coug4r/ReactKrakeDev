import React from "react";

function BarraProgreso({ progreso }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: "8px",
        overflow: "hidden",
        height: "20px",
        margin: "10px 0"
      }}
    >
      <div
        style={{
          width: `${progreso * 100}%`, // si progreso está entre 0 y 1
          backgroundColor: "#4a90e2",
          height: "100%",
          transition: "width 0.3s ease"
        }}
      />
    </div>
  );
}

export default BarraProgreso;
