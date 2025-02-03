import { Box, Grid, GridOwnProps } from "@mui/material";
import { getNyckeltalVarde, NyckeltalProps } from "./utils";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "../Tooltip";
import { AgronodTypography } from "../AgronodTypography";

type Props = {
  item: NyckeltalProps;
} & Omit<GridOwnProps, "item">;

export default function Nyckeltal({ item, ...rest }: Props) {
  return (
    <Grid
      item
      xs={12}
      sm={5.8}
      md={2.8}
      style={{
        borderRadius: "16px",
        boxShadow: "none",
        border: "1px solid #E5E3E0",
        padding: "16px",
        background: "#fff",
      }}
      {...rest}
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
        sx={{ fontFamily: "inter, sans-serif!important" }}
        component="p"
        variant="caption"
        color="#616161"
      >
        {item.enhet}
      </AgronodTypography>

      <AgronodTypography
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
      </AgronodTypography>
    </Grid>
  );
}
