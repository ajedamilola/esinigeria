import React from "react";

export default function Content({
  title,
  children,
  titlePos = "left" || "right",
  light = true,
  className,
  nobg
}) {
  return (
    <div className={`about-content ${className}`}>
      <h2
        className={`${
          titlePos !== "center" ? "d-block" : "d-none"
        } text-${titlePos}`}
      >
        {title}
      </h2>
      <div
        className={`${
          titlePos == "center" ? "d-flex" : "d-none"
        } justify-content-around flex-row align-items-center`}
      >
        <div className="col underline"></div>
        <div className="col flex-grow-1">
          <h2 className="text-center pb-4">{title}</h2>
        </div>
        <div className="col underline"></div>
      </div>
      <div
        className={`${nobg?"":`bg-${light ? "l" : "d"}`} p-1 p-md-3 p-lg-4 rounded-top-${
          titlePos === "right" ? "left" : "right"
        } rounded-bottom-${titlePos === "right" ? "left" : "right"} ${
          titlePos === "center" ? "rounded-border" : ""
        }`}
        style={{ [`border-${titlePos}`]: "4px solid var(--bs-primary)" }}
      >
        <p className={`${light ? "text-dark" : "text-white"}`}>{children}</p>
      </div>
    </div>
  );
}
