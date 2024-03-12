import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  SxProps,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material/styles";

type AsideCardBaseProps = Pick<MuiCardProps, "variant" | "sx">;

export interface AsideCardProps extends AsideCardBaseProps {
  children: React.ReactNode;
  position: "left" | "right";
  centeredContent?: boolean;
  padding?: string | number;
}

const AsideCard = ({
  children,
  position,
  centeredContent,
  padding,
  ...rest
}: AsideCardProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styleObject: SxProps = {
    padding: padding,
    minHeight: "100px",
  };
  if (position === "left") {
    styleObject.borderBottomRightRadius = "16px";
    styleObject.borderTopRightRadius = "16px";
    styleObject.borderTopLeftRadius = "0";
    styleObject.borderBottomLeftRadius = "0";
    styleObject.marginRight = "-16px";
  }

  if (position === "right") {
    styleObject.borderBottomLeftRadius = "16px";
    styleObject.borderTopLeftRadius = "16px";
    styleObject.borderTopRightRadius = "0";
    styleObject.borderBottomRightRadius = "0";
    styleObject.marginLeft = "-16px";
  }

  if (centeredContent) {
    styleObject.display = "flex";
    styleObject.flexDirection = "column";
    styleObject.alignItems = "center";
    styleObject.justifyContent = "center";
  }

  if (mobile) {
    styleObject.borderBottomRightRadius = "0";
    styleObject.borderTopRightRadius = "16px";
    styleObject.borderTopLeftRadius = "16px";
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
    <MuiCard
      {...rest}
      sx={[{ ...styleObject }, rest.sx as (theme: Theme) => any]}
    >
      {children}
    </MuiCard>
  );
};

export default AsideCard;
