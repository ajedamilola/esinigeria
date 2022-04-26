import React from "react";

export default function Content({ title, children,titlePos="left"||"right",light=false }) {
    var style = titlePos=="left"?{
        borderLeft:"4px solid var(--bs-primary)"
    }:{
        borderRight:"4px solid var(--bs-primary)"
    }
  return (
    <div className="about-content">
        <h2  style={{...style,textAlign:titlePos}}>{title}</h2>
        <p className={`py-2 ${light?"text-light":"text-dark"}`}>{children}</p>
        <hr />
    </div>
  );
}
