import React from "react";
import Flex from "./Flex";
import colors from "@/app/color";

type TextProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  size?: number
};

export const Text: React.FC<TextProps> = ({
  children,
  className = "",
  style,
  size = 16,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        color: colors.primary,
        fontSize: `${size}px`,
        display: "inline-flex",
        ...style,
      }}
      className={className}
    >
      {children}
    </Flex>
  );
};

export default Text;
