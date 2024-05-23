import React from "react";
import "../css/ButtonComponent.css";

function hasNonEmptyMessage(obj: any) {
  for (let key in obj) {
    if (obj[key] && obj[key].message && obj[key].message.trim() !== "") {
      return true;
    }
  }
  return false;
}

export default function ButtonComponent(props: { onClick: any, errors?:any, title?:string }) {
    const hasError = hasNonEmptyMessage(props.errors);
    
  return (
    <button className={hasError ? "button-disabled" : "button" } type="submit" onClick={props.onClick} disabled={hasNonEmptyMessage(props.errors)}>
      {props.title ?? "Submit"}
    </button>
  );
}
