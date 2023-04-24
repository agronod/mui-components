import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  Collapse as MuiCollapse,
  SxProps,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledEngineProvider, useTheme } from "@mui/material/styles";

type CardBaseProps = Pick<MuiCardProps, "variant">;

export interface CardProps extends CardBaseProps {
  children: React.ReactNode;
  positionLeft: boolean;
  positionRight: boolean;
  centeredContent?: boolean;
  isCollapsible?: boolean;
  opened?: boolean;
  collapsedSize?: string | number;
  orientation?: "horizontal" | "vertical";
  padding?: string;
}

const Card = ({
  children,
  positionLeft,
  positionRight,
  centeredContent,
  isCollapsible,
  opened,
  collapsedSize,
  orientation,
  padding,
  ...rest
}: CardProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const styleObject: SxProps = {
    padding: padding,
    minHeight: "100px",
    borderRadius: "20px",
  };
  if (positionLeft) {
    styleObject.borderBottomRightRadius = "20px";
    styleObject.borderTopRightRadius = "20px";
    styleObject.borderTopLeftRadius = "0";
    styleObject.borderBottomLeftRadius = "0";
    styleObject.marginRight = "-20px";
  }

  if (positionRight) {
    styleObject.borderBottomLeftRadius = "20px";
    styleObject.borderTopLeftRadius = "20px";
    styleObject.borderTopRightRadius = "0";
    styleObject.borderBottomRightRadius = "0";
    styleObject.marginLeft = "-20px";
  }

  if (centeredContent) {
    styleObject.display = "flex";
    styleObject.alignItems = "center";
    styleObject.justifyContent = "center";
  }

  if (mobile && (positionLeft || positionRight)) {
    styleObject.borderBottomRightRadius = "0";
    styleObject.borderTopRightRadius = "20px";
    styleObject.borderTopLeftRadius = "20px";
    styleObject.borderBottomLeftRadius = "0";
    styleObject.marginRight = "0";
    styleObject.position = "absolute";
    styleObject.bottom = "0";
    styleObject.left = "0";
    styleObject.right = "0";
  }
  return (
    <MuiCollapse in={true}>
      <MuiCard {...rest} sx={styleObject}>
        {children}
      </MuiCard>
    </MuiCollapse>
  );
};

export default Card;
