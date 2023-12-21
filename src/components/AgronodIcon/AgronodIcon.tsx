import { Skeleton, SvgIcon, SvgIconProps } from "@mui/material";
import React, { Suspense } from "react";

export interface IconProps extends SvgIconProps {
  name: string;
}

const AgronodIcon = (props: IconProps) => {
  const DynamicComponent = React.lazy(
    () => import(`../../assets/icons/${props.name}.svg?component`)
  );
  return (
    <Suspense
      fallback={
        <Skeleton variant="circular" animation="wave" width={24} height={24} />
      }
    >
      <SvgIcon
        component={DynamicComponent}
        fontSize={props.fontSize}
        color={props.color}
        inheritViewBox={false}
        sx={{
          "& *": {
            fill: "currentcolor",
          },
          ...props.sx,
        }}
      />
    </Suspense>
  );
};

export default AgronodIcon;
