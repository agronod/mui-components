import { Typography } from "@mui/material";
import { getNyckeltalVarde, NyckeltalProps } from "./utils";

type Props = {
  item: NyckeltalProps;
};

export default function Nyckeltal({ item }: Props) {
  return (
    <li
      style={{
        borderRadius: "20px",
        boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 10%)",
        width: "100%",
        height: "104px",
        padding: "16px",
        background: "#fff",
      }}
    >
      <Typography variant="caption">{item.nyckeltal}</Typography>
      <Typography component="p" variant="caption" color="#616161">
        {item.enhet}
      </Typography>

      <Typography
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
