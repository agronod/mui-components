import { Skeleton, SvgIcon, SvgIconProps } from "@mui/material";
import React, { Suspense } from "react";

/**
 * Agronod-specific icons
 * Used for navigation and prominent icons.
 *
 * Other icons are from Material UI >> (use “round” variation when possible).
 *
 * From design, we should extract 24x24 so it matches with MUI.
 *
 * Ensure the `fill` property in the SVG is utilized correctly to allow for dynamic color assignment to the icon shapes,
 * ensuring the icons appear correctly within the application.
 */

export interface IconProps extends SvgIconProps {
  name: string;
}

const AgronodIcon: React.FC<IconProps> = ({
  name,
  fontSize = "inherit",
  color = "inherit",
  sx,
  ...props
}) => {
  const DynamicComponent = React.lazy(
    () => import(`../../assets/icons/${name}.svg?component`)
  );

  return (
    <Suspense
      fallback={
        <Skeleton variant="circular" animation="wave" width={24} height={24} />
      }
    >
      <SvgIcon
        component={DynamicComponent}
        fontSize={fontSize}
        color={color}
        inheritViewBox={false}
        sx={{
          "& *": {
            fill: "currentcolor",
          },
          ...sx,
        }}
        {...props}
      />
    </Suspense>
  );
};

export default AgronodIcon;
