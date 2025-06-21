import React from "react";

export default function Button({ label, classNames, icon }) {
  return (
    <button
      className={`flex text-sm justify-between items-center gap-2 rounded-full ${classNames}`}
    >
      {label} {icon ? icon : ""}
    </button>
  );
}
