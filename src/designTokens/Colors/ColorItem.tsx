import { Box, Card, Typography, useTheme } from "@mui/material"

type ColorItemProps = {
  name: string,
  code?: string,
}

const ColorItem = (props: ColorItemProps) => {
  const theme = useTheme();
 return  <Card
    variant="outlined"
    sx={{
      padding: 0,
      borderRadius: "20px",
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      width: "130px",
    }}
  >
    <Box
      sx={{
        width: "130px",
        height: "80px",
        borderBottom: "1px solid",
        borderColor: theme.palette.border,
        backgroundColor: props.code,
      }}
    ></Box>
    <Box
      sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
    >
      <Typography variant="body2" sx={{wordBreak: "break-all"}}> <code>{props.name}</code></Typography>
      <Typography variant="caption">
       {props.code}
      </Typography>
    </Box>
  </Card>
}

export default ColorItem