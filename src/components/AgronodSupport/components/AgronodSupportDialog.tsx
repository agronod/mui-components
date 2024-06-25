import { Stack } from "@mui/material";
import { AgronodModalCard } from "../../AgronodModalCard";
import { AgronodTypography } from "../../AgronodTypography";
import { AgronodLink } from "../../AgronodLink";
import { AgronodButton } from "../../AgronodButton";

type SupportDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  supportEmail?: string;
  supportTelephone?: string;
  respondTime?: string;
};
const SupportDialog = (props: SupportDialogProps) => {
  return (
    <>
      <AgronodModalCard
        open={props.isOpen}
        title="Kontakta oss"
        onClose={() => {
          props.onClose();
        }}
        cardWidth="512px"
      >
        <>
          <Stack
            gap={1}
            sx={(theme) => ({ color: theme.palette.text.secondary })}
          >
            <AgronodTypography variant="body1" color="text.secondary">
              Behöver du hjälp, har en fråga eller vill lämna feedback? Tveka
              inte att höra av dig.
            </AgronodTypography>
            {props.supportEmail && (
              <Stack flexDirection="row" gap={1} justifyContent="center">
                <AgronodTypography variant="body1">E-post: </AgronodTypography>
                <AgronodLink
                  href="mailto:support@agronod.com"
                  target="_top"
                  type="inverted"
                >
                  {props.supportEmail}
                </AgronodLink>
              </Stack>
            )}
            {props.supportTelephone && (
              <Stack flexDirection="row" gap={1} justifyContent="center">
                <AgronodTypography variant="body1">Telefon: </AgronodTypography>
                <AgronodLink
                  href={`tel:${props.supportTelephone}`}
                  target="_top"
                  type="inverted"
                >
                  {props.supportTelephone}
                </AgronodLink>
              </Stack>
            )}
            <AgronodTypography variant="body1">
              {props.respondTime
                ? props.respondTime
                : "Vi svarar vardagar kl. 09-15"}
            </AgronodTypography>
          </Stack>
          <AgronodButton
            variant="contained"
            onClick={() => props.onClose()}
            sx={{ marginTop: 3 }}
          >
            Klar
          </AgronodButton>
        </>
      </AgronodModalCard>
    </>
  );
};

export default SupportDialog;
