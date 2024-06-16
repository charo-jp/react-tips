import { ReactNode } from "react";

// Discriminated Unions
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
}

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const {mode, children} = props;

  if (mode === "hint"){
    return (
      <aside className = "infobox infobox-hint">
      <p>{children}</p>
    </aside>
    )
  }

  return (
    <aside className = {`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
