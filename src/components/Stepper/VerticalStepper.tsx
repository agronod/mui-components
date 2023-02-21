import { Box, Link, Typography } from "@mui/material";
import { default as MuiStepper } from "@mui/material/Stepper";
import { default as MuiStep } from "@mui/material/Step";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

interface Props {
  activeStep?: number;
  onSelectStep?: (index: number) => void;
  steps: Step[];
}

interface Step {
  label: string;
  completed?: boolean;
  disabled?: boolean;
}

const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
  top: 0,
  marginLeft: 3,
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.primary.light,
    borderWidth: 2,
    minHeight: 30,
    marginTop: -6,
    marginBottom: -6,
  },
  [`&.${stepConnectorClasses.completed}>span, &.${stepConnectorClasses.active}>span`]:
    {
      borderColor: theme.palette.primary.main,
    },
}));

const StyledStep = styled(MuiStep)(({ theme, completed }) => ({
  ...(completed && {
    display: "",
  }),
}));

const StyledStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) => prop !== "completed",
})(({ theme }) => ({
  padding: 0,
  whiteSpace: "nowrap",
  [`& .${stepLabelClasses.labelContainer}`]: {
    color: `${theme.palette.text.disabled} !important`,
  },
  [`& .${stepLabelClasses.completed}`]: {
    color: `${theme.palette.primary.main} !important`,
  },
  [`& .${stepLabelClasses.active}`]: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: 700,
  },
  // [`& .${stepLabelClasses.completed}:hover`]: {
  //   cursor: `pointer`,
  // },
}));

const StyledStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    ownerState.completed || ownerState.active
      ? theme.palette.primary.main
      : theme.palette.primary.light,
  zIndex: 1,
  color: "#fff",
  width: ownerState.active ? 12 : 8,
  height: ownerState.active ? 12 : 8,
  marginLeft: ownerState.active ? "-2px" : undefined,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: ownerState.active
    ? `2px solid ${theme.palette.background.default}`
    : undefined,
  outline: ownerState.active
    ? `1px solid ${theme.palette.primary.main}`
    : undefined,
}));

function StyledStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <StyledStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    ></StyledStepIconRoot>
  );
}

export default function VerticalStepper({
  activeStep,
  steps,
  onSelectStep,
}: Props) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <MuiStepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<StyledStepConnector />}
      >
        {steps.map((step, index) => {
          const activeStepIndex = activeStep || 0;
          const active = index === activeStepIndex;
          const isPrevious = index < activeStepIndex;
          const isFuture = index > activeStepIndex;
          const completed = step.completed || isPrevious;

          return (
            <StyledStep key={step.label} completed={completed} active={active}>
              <StyledStepLabel StepIconComponent={StyledStepIcon}>
                {!step.disabled &&
                onSelectStep &&
                ((!active && completed) || isPrevious) ? (
                  <Link
                    component="button"
                    onClick={() => onSelectStep && onSelectStep(index)}
                    disabled={(!completed && isFuture) || step.disabled}
                    variant="body2"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: 400,
                      verticalAlign: "inherit",
                      marginLeft: 0.5,
                      cursor: "pointer",
                    }}
                  >
                    {step.label}
                  </Link>
                ) : (
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: active ? 700 : 400,
                        marginLeft: active ? "2px" : "3px",
                        color:
                          step.disabled && completed
                            ? "text.primary"
                            : "inherit",
                      }}
                    >
                      {step.label}
                    </Typography>
                  </>
                )}
              </StyledStepLabel>
            </StyledStep>
          );
        })}
      </MuiStepper>
    </Box>
  );
}
