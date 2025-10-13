import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodDialog, { AgronodDialogProps } from "./AgronodDialog";
import { useState } from "react";
import { AgronodButton } from "../AgronodButton";
import { Box } from "@mui/material";
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
        <Box>
          <AgronodTypography variant="body1">
            This dialog has no title. Just content and actions. Sometimes you
            dont need a title to convey your message effectively. The content
            can speak for itself, especially when the context is clear from the
            action that opened the dialog.
          </AgronodTypography>
          <br />
          <AgronodTypography variant="body2">
            This approach works well for simple confirmations, quick messages,
            or when you want to minimize the visual hierarchy and keep things
            streamlined. Just make sure the content is clear and actionable
            without needing a heading to provide context.
          </AgronodTypography>
        </Box>
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
