import { Typography } from "@mui/material";
import { getNyckeltalVarde, NyckeltalProps } from "./utils";

type Props = {
  item: NyckeltalProps;
  boxShadow?: boolean;
};

export default function Nyckeltal({ item, boxShadow = true }: Props) {
  return (
    <li
      style={{
        borderRadius: "20px",
        boxShadow: boxShadow ? "0px 2px 10px 0px rgb(0 0 0 / 10%)" : "none",
        border: boxShadow ? "" : "1px solid rgba(0, 0, 0, 0.12)",
        padding: "16px",
        background: "#fff",
      }}
    >
      <Typography
        sx={{ fontFamily: "inter, sans-serif!important" }}
        variant="caption"
      >
        {item.nyckeltal}
      </Typography>
      <Typography
        sx={{ fontFamily: "inter, sans-serif!important" }}
        component="p"
        variant="caption"
        color="#616161"
      >
        {item.enhet}
      </Typography>

      <Typography
        sx={{ fontFamily: "inter, sans-serif!important" }}
        marginTop={0.5}
        fontWeight={600}
        variant="body2"
        fontSize={24}
      >
        {getNyckeltalVarde(item.varde).toLocaleString("sv-SE")}
      </Typography>
    </li>
  );
}
