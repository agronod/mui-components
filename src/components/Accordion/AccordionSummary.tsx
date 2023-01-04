import {
  styled,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
} from "@mui/material";

const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  height: 42,
  padding: 0,
  cursor: "unset!important",
  minHeight: "0px!important",
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: 0,
  },
}));

export default function AccordionSummary(props: AccordionSummaryProps) {
  return <StyledAccordionSummary {...props} />;
}
