import React from "react";

export default function Modal({ active }) {
  return (
    <div className={`${active ? "modal-blur active" : "modal-blur"}`}></div>
  );
}
