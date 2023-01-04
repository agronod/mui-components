import {
  styled,
  Accordion as MuiAccordion,
  AccordionProps,
} from "@mui/material";

const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  position: "inherit",
  padding: theme.spacing(3),
  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.05)",
  border: "1px solid #BDBDBD",
  borderRadius: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
}));

export default function Accordion(props: AccordionProps) {
  return <StyledAccordion {...props} />;
}
