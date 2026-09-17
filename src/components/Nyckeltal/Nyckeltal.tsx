import { Box } from "@mui/material";
import { getNyckeltalVarde, NyckeltalProps } from "./utils";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "../Tooltip";
import { AgronodTypography } from "../AgronodTypography";

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
        <AgronodTypography
          sx={{ fontFamily: "inter, sans-serif!important" }}
          variant="caption"
        >
          {item.nyckeltal}
        </AgronodTypography>
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
      <AgronodTypography
        component="p"
        variant="caption"
        sx={{
          color: "#616161",
          fontFamily: "inter, sans-serif!important"
        }}>
        {item.enhet}
      </AgronodTypography>

      <AgronodTypography
        variant="body2"
        sx={{
          marginTop: 0.5,
          fontWeight: 600,
          fontSize: 24,
          fontFamily: "inter, sans-serif!important"
        }}>
        {getNyckeltalVarde(item.varde, item.antalDecimaler).toLocaleString(
          "sv-SE",
          { minimumFractionDigits: item.antalDecimaler }
        )}
      </AgronodTypography>
    </li>
  );
}
