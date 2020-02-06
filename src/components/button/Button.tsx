import * as React from "react";
import "./button.scss"
export interface IButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: (arg: any) => void;
}

export function Button(props: IButtonProps = { name: "Button", type: "button", onClick: () => {} }) {
  return (
    <button className="btn" type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
}
