import { Box, Typography } from "@mui/material";
import { getNyckeltalVarde, NyckeltalProps } from "./utils";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "../Tooltip";

type Props = {
  item: NyckeltalProps;
};

export default function Nyckeltal({ item }: Props) {
  return (
    <li
      style={{
        borderRadius: "16px",
        boxShadow: "none",
        border: "1px solid #E5E3E0",
        padding: "16px",
        background: "#fff",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ fontFamily: "inter, sans-serif!important" }}
          variant="caption"
        >
          {item.nyckeltal}
        </Typography>
        {item.kommentar && (
          <Tooltip title={item.kommentar}>
            <span
              style={{
                marginBottom: "-7px",
              }}
            >
              <InfoOutlinedIcon
                sx={{
                  color: "text.secondary",
                  width: "20px",
                  height: "20px",
                }}
              />
            </span>
          </Tooltip>
        )}
      </Box>
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
        {getNyckeltalVarde(item.varde, item.antalDecimaler).toLocaleString(
          "sv-SE",
          { minimumFractionDigits: item.antalDecimaler }
        )}
      </Typography>
    </li>
  );
}
