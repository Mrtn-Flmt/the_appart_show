import React, { ReactNode } from "react";

interface FlexProps {
  direction?: "row" | "column";
  justify?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}

const Flex: React.FC<FlexProps> = ({
  direction = "row",
  align = "start",
  className = "",
  children,
  style,
  id,
  ...props
}) => {
  const flexStyle = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    ...style,
    ...props,
  };

  return (
    <div id={id} className={className} style={flexStyle} {...props}>
      {children}
    </div>
  );
};

export default Flex;
