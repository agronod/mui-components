import * as React from "react";
import { ResponsiveContainer as RechartsResponsiveContainer } from "recharts";

type ResponsiveContainerProps = {
  children: React.JSX.Element;
  height?: string | number;
};

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  height = "100%",
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        paddingBottom: "0px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      >
        <RechartsResponsiveContainer>{children}</RechartsResponsiveContainer>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
