import { Button, Link, Stack, Typography } from "@mui/material";
import { AgronodModalCard } from "../../AgronodModalCard";

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
            <Typography variant="body1" color="text.secondary">
              Behöver du hjälp, har en fråga eller vill lämna feedback? Tveka
              inte att höra av dig.
            </Typography>
            {props.supportEmail && (
              <Stack flexDirection="row" gap={1} justifyContent="center">
                <Typography variant="body1">E-post: </Typography>
                <Link
                  href="mailto:support@agronod.com"
                  target="_top"
                  className="inverted"
                >
                  {props.supportEmail}
                </Link>
              </Stack>
            )}
            {props.supportTelephone && (
              <Stack flexDirection="row" gap={1} justifyContent="center">
                <Typography variant="body1">Telefon: </Typography>
                <Link
                  href={`tel:${props.supportTelephone}`}
                  target="_top"
                  className="inverted"
                >
                  {props.supportTelephone}
                </Link>
              </Stack>
            )}
            <Typography variant="body1">
              {props.respondTime
                ? props.respondTime
                : "Vi svarar vardagar kl. 09-15"}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={() => props.onClose()}
            sx={{ marginTop: 3 }}
          >
            Klar
          </Button>
        </>
      </AgronodModalCard>
    </>
  );
};

export default SupportDialog;
