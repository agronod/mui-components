import {
  styled,
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps,
} from "@mui/material";

const StyledAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  width: 650,
  paddingBottom: 0,
}));

export default function AccordionDetails(props: AccordionDetailsProps) {
  return <StyledAccordionDetails {...props} />;
}
