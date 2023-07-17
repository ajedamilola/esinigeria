import React from "react";

export default function FeatureCard({ title, image, content, className }) {
  return (
    <div className={`p-3  text-center ${className} rounded-border f-card`} style={{border:"1px solid var(--bs-primary)"}}>
      <div className="text-center">
          {image}
        <h3 className="text-primary text-center display-6">
          {title}
        </h3>
      </div>
      <p style={{ fontFamily: "poppins-light" }}>{content}</p>
    </div>
  );
}
