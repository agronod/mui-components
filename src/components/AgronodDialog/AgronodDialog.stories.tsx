import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodDialog, { AgronodDialogProps } from "./AgronodDialog";
import { useState } from "react";
import { AgronodButton } from "../AgronodButton";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AgronodIcon } from "../AgronodIcon";
import { AgronodTypography } from "../AgronodTypography";
import { AgronodLink } from "../AgronodLink";
export default {
  title: "Shared Components/Dialog",
  component: AgronodDialog,
} as Meta<typeof AgronodDialog>;

export const Default: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open dialog
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Dialog Title"
        actions={
          <>
            <AgronodButton variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Confirm
            </AgronodButton>
          </>
        }
      >
        <Box>
          <AgronodTypography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AgronodTypography>
          <br />

          <AgronodTypography variant="body2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </AgronodTypography>
        </Box>
      </AgronodDialog>
    </>
  );
};
Default.args = {};

export const Success: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open success dialog
      </AgronodButton>
      <AgronodDialog
        {...args}
        icon={
          <AgronodIcon
            sx={{ fontSize: "52px" }}
            name="successOutlined"
            color="success"
            fontSize="large"
          />
        }
        open={open}
        title="Handlingen lyckades!"
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              alignItems: "center",
            },
          },
        }}
        actions={
          <>
            <AgronodButton variant="outlined" onClick={() => setOpen(false)}>
              Valfritt CTA
            </AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Klar
            </AgronodButton>
          </>
        }
      >
        <AgronodTypography variant="body1">
          En beskrivning av vad du behöver göra nu, eller något som kan vara bra
          att veta.
        </AgronodTypography>
      </AgronodDialog>
    </>
  );
};
Success.args = {
  title: "Dialog Title",
  alignContent: "center",
};

export const Error: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open error dialog
      </AgronodButton>
      <AgronodDialog
        {...args}
        icon={
          <AgronodIcon
            sx={{ fontSize: "52px" }}
            name="errorOutlined"
            color="error"
            fontSize="large"
          />
        }
        open={open}
        title="Något gick fel!"
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              alignItems: "center",
            },
          },
        }}
        actions={
          <>
            <AgronodButton variant="outlined" onClick={() => setOpen(false)}>
              Kontakta oss
            </AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Stäng
            </AgronodButton>
          </>
        }
      >
        <AgronodTypography variant="body1">
          Beskriv felet och vad man kan göra åt saken.
        </AgronodTypography>
        <Box>
          <AgronodTypography variant="body1" sx={{ display: "inline" }}>
            Om inget, nåt i stil med: Prova igen senare. Kontakta oss på{" "}
          </AgronodTypography>
          <AgronodLink type="classic" sx={{ display: "inline" }}>
            support@agronod.com
          </AgronodLink>{" "}
          om felet kvarstår.
        </Box>
      </AgronodDialog>
    </>
  );
};
Error.args = {
  title: "Dialog Title",
  alignContent: "end",
};

export const WithScrolling: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open dialog with scrolling content
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        actions={
          <>
            <AgronodButton variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Confirm
            </AgronodButton>
          </>
        }
      >
        <Box>
          {Array.from({ length: 10 }).map((_, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Box>
          ))}
        </Box>
      </AgronodDialog>
    </>
  );
};
WithScrolling.args = {
  title: "Dialog with Scrolling Content",
};

export const WithoutTitle: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open dialog without title
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        actions={
          <AgronodButton variant="contained" onClick={() => setOpen(false)}>
            Confirm
          </AgronodButton>
        }
      >
        This dialog has no title. Just content and actions.
      </AgronodDialog>
    </>
  );
};
WithoutTitle.args = {};

export const WithCaption: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open dialog with caption
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        actions={
          <>
            <AgronodButton onClick={() => setOpen(false)}>Cancel</AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Confirm
            </AgronodButton>
          </>
        }
      >
        This dialog has a caption above the title to provide additional context.
      </AgronodDialog>
    </>
  );
};
WithCaption.args = {
  caption: "Step 2 of 4",
  title: "Dialog with Caption",
};

export const WithButtonsAsChildren: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open dialog with buttons as children
      </AgronodButton>
      <AgronodDialog
        {...args}
        caption="Steg 1 av 3"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box>
          <p>
            This dialog has no actions prop. The buttons are part of the
            children content instead, giving you full control over the layout.
          </p>
          {Array.from({ length: 10 }).map((_, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Box>
          ))}
          <Box
            sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "flex-end" }}
          >
            <AgronodButton onClick={() => setOpen(false)}>Cancel</AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Confirm
            </AgronodButton>
          </Box>
        </Box>
      </AgronodDialog>
    </>
  );
};
WithButtonsAsChildren.args = {
  title: "Custom Layout with Scrolling",
};

export const CustomStyles: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open dialog
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        actions={
          <>
            <AgronodButton onClick={() => setOpen(false)}>Cancel</AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Confirm
            </AgronodButton>
          </>
        }
      >
        This is a dialog with custom styling.
      </AgronodDialog>
    </>
  );
};
CustomStyles.args = {
  title: "Dialog with Custom Styles",
  slotProps: {
    paper: {
      sx: {
        border: "1px solid red",
      },
    },
    root: {
      sx: {
        backgroundColor: "red",
      },
    },
  },
};

export const MuiDefaultDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open MUI Default Dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>MUI Default Dialog</DialogTitle>
        <IconButton aria-label="close" onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          This is Material-UIs default Dialog component without any
          customization. Compare the padding, spacing, and overall styling with
          AgronodDialog.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
