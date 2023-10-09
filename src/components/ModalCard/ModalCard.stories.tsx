import { StoryFn, Meta } from "@storybook/react";
import ModalCard from "./ModalCard";
import { Box, Button } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useMemo, useState } from "react";
import { ProgressIndicator } from "../ProgressIndicator";

export default {
  title: "Components/ModalCard",
  component: ModalCard,
  parameters: {
    componentSubtitle: "Responsive Modal Card",
    docs: {
      description: {
        component: `<p>Modal Card is responsive custom component that you import from @agronod/muicomponents</p>
          `,
      },
    },
  },
  argTypes: {
    children: {
      type: { name: "symbol", required: true },
    },
    onClose: {
      table: {
        category: "Events",
      },
    },
    notClosable: {
      control: {
        type: "boolean",
      },
    },
    title: {
      control: {
        type: "text",
        required: true,
      },
    },
    open: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    isBigTitle: {
      control: {
        type: "boolean",
      },
    },
    subtitle: {
      control: {
        type: "text",
      },
    },
    alignment: {
      control: {
        type: "radio",
        options: ["left", "center"],
      },
    },
    cardWidth: {
      description:
        "This property is used to control the size of the modal window, by default it is set to 100% it can be changed to any value or <code>auto</code>.",
      control: {
        type: "text",
      },
    },
    caption: {
      description:
        "This property is used to control overline above main heading it can be any element",
      type: { name: "symbol" },
    },
    sx: {
      description: `This property is used to control top parent element so to style children elements trough it you can add classes to sx object. like <code>sx: { color: "red", "& .MuiPaper-root": { backgroundColor: "blue" }}</code>.`,
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof ModalCard>;

export const ModalCardDefault: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardDefault.args = {
  title: "Modal card example",
  open: false,
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  children: (
    <Box>
      <p>this is test paragraph 1</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  caption: <ProgressIndicator active={2} total={32} />,
};
export const ModalCardNotClosable: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardNotClosable.args = {
  title: "This modal is not closable",
  open: false,
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  children: (
    <Box>
      <p>this is test paragraph 1</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  caption: <ProgressIndicator active={2} total={32} />,
  notClosable: true,
};
export const ModalCardBigTitle: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardBigTitle.args = {
  title: "Modal card example",
  open: false,
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  children: (
    <Box>
      <p>this is test paragraph 1</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  caption: <ProgressIndicator active={2} total={32} />,
  isBigTitle: true,
};
export const ModalCardLeftAligned: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardLeftAligned.args = {
  title: "Modal card example",
  open: false,
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  children: (
    <Box>
      <p>this is test paragraph 1</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  caption: <ProgressIndicator active={2} total={32} />,
  alignment: "left",
};

export const ModalCardWithIcon: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardWithIcon.args = {
  title: "Modal card example title",
  subtitle: "Modal card example subtitle",
  open: false,
  children: (
    <Box>
      <p>Modal card example children</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  icon: <ErrorOutlineOutlinedIcon color="error" fontSize="large" />,
};

export const ModalCardCustomWidth: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardCustomWidth.args = {
  title: "Modal card example title",
  subtitle: "Modal card example subtitle",
  open: false,
  children: (
    <Box>
      <p>Modal card example children</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  cardWidth: "auto",
};

export const ModalCardCustomStyles: StoryFn<typeof ModalCard> = ({
  children,
  open,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  useMemo(() => setIsOpen(open), [open]);
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalCard {...rest} open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalCard>
    </>
  );
};
ModalCardCustomStyles.args = {
  title: "Modal card example title",
  subtitle: "Modal card example subtitle",
  open: false,
  children: (
    <Box>
      <p>Modal card example children</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  cardWidth: "auto",
  sx: {
    backgroundColor: "rgb(217 188 188 / 50%)",
    "& .MuiPaper-root": { backgroundColor: "beige" },
  },
};
