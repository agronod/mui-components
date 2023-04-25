import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  SxProps,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

type CardBaseProps = Pick<MuiCardProps, "variant" | "sx">;

export interface CardProps extends CardBaseProps {
  children: React.ReactNode;
  positionLeft?: boolean;
  positionRight?: boolean;
  centeredContent?: boolean;
  padding?: string | number;
}

const Card = ({
  children,
  positionLeft,
  positionRight,
  centeredContent,
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
    styleObject.width = "100%";
    styleObject.marginRight = "0";
    styleObject.marginLeft = "0";
    styleObject.minHeight = "250px";
  }

  if (rest.variant === undefined) {
    styleObject.boxShadow = "unset !important";
  }
  return (
    <MuiCard {...rest} sx={{ ...styleObject, ...rest.sx }}>
      {children}
    </MuiCard>
  );
};

export default Card;
