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
  maxWidth: "md",
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
        maxWidth: "900px",
        width: "900px",
      },
    },
    root: {
      sx: {
        backgroundColor: "red",
      },
    },
  },
};

export const Mobile: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open mobile dialog
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Mobile Dialog"
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
          <AgronodTypography variant="body1">
            This dialog is optimized for mobile devices. It slides up from the
            bottom with rounded top corners and maintains a minimum 10vh space
            from the top of the screen.
          </AgronodTypography>
          <br />
          <AgronodTypography variant="body2">
            The bottom-sheet style provides a native mobile app feel while
            keeping content accessible and easy to dismiss.
          </AgronodTypography>
        </Box>
      </AgronodDialog>
    </>
  );
};
Mobile.args = {};

export const MobileGrowing: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open mobile dialog with more content
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Terms and Conditions"
        caption="Step 2 of 3"
        alignActions="center"
        mobileActionsDirection="row"
        icon={
          <AgronodIcon
            sx={{ fontSize: "52px" }}
            name="infoOutlined"
            color="primary"
            fontSize="large"
          />
        }
        actions={
          <>
            <AgronodButton variant="outlined" onClick={() => setOpen(false)}>
              Decline
            </AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Accept
            </AgronodButton>
          </>
        }
      >
        <Box>
          <AgronodTypography variant="body1" sx={{ fontWeight: 600 }}>
            Welcome to our service
          </AgronodTypography>
          <br />
          <AgronodTypography variant="body2">
            By using this service, you agree to our terms and conditions. We
            value your privacy and are committed to protecting your personal
            data.
          </AgronodTypography>
          <br />
          <AgronodTypography variant="body2">
            This dialog demonstrates how the mobile bottom sheet grows naturally
            with its content. As more content is added, the dialog expands
            upward from the bottom while maintaining its compact appearance.
          </AgronodTypography>
          <br />
          <AgronodTypography variant="body2">
            Notice how there&apos;s still space at the top of the screen, making
            it easy to see the context behind the dialog and providing a clear
            visual hierarchy.
          </AgronodTypography>
        </Box>
      </AgronodDialog>
    </>
  );
};
MobileGrowing.args = {};

export const MobileScrolling: StoryFn<typeof AgronodDialog> = (
  args: AgronodDialogProps
) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AgronodButton variant="contained" onClick={() => setOpen(true)}>
        Open mobile dialog with scrolling
      </AgronodButton>
      <AgronodDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Privacy Policy"
        caption="Last updated: 2024"
        actions={
          <>
            <AgronodButton variant="outlined" onClick={() => setOpen(false)}>
              Close
            </AgronodButton>
            <AgronodButton variant="contained" onClick={() => setOpen(false)}>
              Accept All
            </AgronodButton>
          </>
        }
      >
        <Box>
          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            1. Introduction
          </AgronodTypography>
          <AgronodTypography variant="body2" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AgronodTypography>

          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            2. Data Collection
          </AgronodTypography>
          <AgronodTypography variant="body2" sx={{ mb: 2 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </AgronodTypography>

          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            3. How We Use Your Information
          </AgronodTypography>
          <AgronodTypography variant="body2" sx={{ mb: 2 }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </AgronodTypography>

          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            4. Data Sharing and Disclosure
          </AgronodTypography>
          <AgronodTypography variant="body2" sx={{ mb: 2 }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </AgronodTypography>

          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            5. Security Measures
          </AgronodTypography>
          <AgronodTypography variant="body2" sx={{ mb: 2 }}>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </AgronodTypography>

          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            6. Your Rights
          </AgronodTypography>
          <AgronodTypography variant="body2" sx={{ mb: 2 }}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </AgronodTypography>

          <AgronodTypography variant="h6" sx={{ mb: 2 }}>
            7. Contact Information
          </AgronodTypography>
          <AgronodTypography variant="body2">
            This mobile dialog demonstrates scrolling behavior when content
            exceeds the maximum height of 90vh. The dialog remains anchored at
            the bottom with rounded top corners, while the content area becomes
            scrollable. This ensures that even lengthy content remains
            accessible while maintaining the minimum 10vh space from the top of
            the screen.
          </AgronodTypography>
        </Box>
      </AgronodDialog>
    </>
  );
};
MobileScrolling.args = {};
