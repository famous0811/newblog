import React from "react";
import "./project.scss";

interface ProjectProps {
  src: string;
  comment: string;
}
function Project({ src, comment }: ProjectProps) {
  return (
    <div className="projects">
      <img src={src} alt="" width="100%" height="100%" />
      <div className="comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}
export default Project;
