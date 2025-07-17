import React from "react";
import backendImg from "../../assets/images/backend.webp";

export default function BackendImg() {
  return (
    <img
      src={backendImg}
      alt="Backend Development"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
