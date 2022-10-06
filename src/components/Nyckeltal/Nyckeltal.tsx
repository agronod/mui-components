import { Typography, useTheme } from "@mui/material";
import { pxToRem } from "../Theme/baseTheme";
import { getNyckeltalVarde, NyckeltalProps } from "./utils";

type Props = {
  item: NyckeltalProps;
};

export default function Nyckeltal({ item }: Props) {
  const theme = useTheme();
  return (
    <li
      style={{
        borderLeft: "1px solid #e5e5e5",
        margin: "16px 0 0",
        paddingLeft: theme.spacing(4),
      }}
    >
      <Typography component="h3" variant="body2">
        {item.nyckeltal}
      </Typography>
      <Typography component="p" variant="caption">
        {item.enhet}
      </Typography>

      <Typography fontSize={pxToRem(50)} lineHeight={1} fontWeight={600} mt={2}>
        {getNyckeltalVarde(item.varde).toLocaleString("sv-SE")}
      </Typography>
    </li>
  );
}
