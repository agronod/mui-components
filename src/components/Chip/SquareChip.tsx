import { styled, Chip, ChipProps } from "@mui/material";

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: "4px",
}));

export default function SquareChip(props: ChipProps) {
  return <StyledChip {...props} />;
}
