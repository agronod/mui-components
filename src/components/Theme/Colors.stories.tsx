import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
export default {
  title: "DesignTokens/ColorPalette",
};

export const ColorPalette = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: 3 }}>
        Theme Colors
      </Typography>
      <Typography variant="h6">Code example:</Typography>
      <Box
        sx={{
          backgroundColor: theme.palette.gray600,
          padding: 1,
          color: theme.palette.white,
          borderRadius: "8px",
          marginY: 1,
        }}
      >
        <code>theme.palette.primary.darkHover</code>
      </Box>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Primary
      </Typography>

      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.primary.darkHover,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark Hover</Typography>
            <Typography variant="caption">
              {theme.palette.primary.darkHover}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.primary.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">
              {theme.palette.primary.dark}
            </Typography>
          </Box>
        </Card>

        {theme.palette.primary.mediumHover && (
          <Card
            variant="outlined"
            sx={{
              padding: 0,
              borderRadius: "20px",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              width: "120px",
            }}
          >
            <Box
              sx={{
                width: "120px",
                height: "80px",
                borderBottom: "1px solid",
                borderColor: theme.palette.border,
                backgroundColor: theme.palette.primary.mediumHover,
              }}
            ></Box>
            <Box
              sx={{
                padding: 1.5,
                background: theme.palette.white,
                flexGrow: 1,
              }}
            >
              <Typography variant="body1">Medium Hover</Typography>
              <Typography variant="caption">
                {theme.palette.primary.mediumHover}
              </Typography>
            </Box>
          </Card>
        )}

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.primary.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.primary.medium}
            </Typography>
          </Box>
        </Card>

        {theme.palette.primary.mainHover && (
          <Card
            variant="outlined"
            sx={{
              padding: 0,
              borderRadius: "20px",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              width: "120px",
            }}
          >
            <Box
              sx={{
                width: "120px",
                height: "80px",
                borderBottom: "1px solid",
                borderColor: theme.palette.border,
                backgroundColor: theme.palette.primary.mainHover,
              }}
            ></Box>
            <Box
              sx={{
                padding: 1.5,
                background: theme.palette.white,
                flexGrow: 1,
              }}
            >
              <Typography variant="body1">Main Hover</Typography>
              <Typography variant="caption">
                {theme.palette.primary.mainHover}
              </Typography>
            </Box>
          </Card>
        )}

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.primary.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">
              {theme.palette.primary.main}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.primary.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.primary.light}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.primary.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.primary.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Secondary
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.secondary.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">
              {theme.palette.secondary.dark}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.secondary.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.secondary.medium}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.secondary.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">
              {theme.palette.secondary.main}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.secondary.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.secondary.light}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.secondary.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.secondary.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Tertiary
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.tertiary.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">
              {theme.palette.tertiary.dark}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.tertiary.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.tertiary.medium}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.tertiary.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">
              {theme.palette.tertiary.main}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.tertiary.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.tertiary.light}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.tertiary.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.tertiary.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 6 }}>
        Semantic Colors
      </Typography>
      <Typography variant="h6">Code example:</Typography>
      <Box
        sx={{
          backgroundColor: theme.palette.gray600,
          padding: 1,
          color: theme.palette.white,
          borderRadius: "8px",
          marginY: 1,
        }}
      >
        <code> theme.palette.success.main</code>
      </Box>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Success
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.success.darkHover,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark Hover</Typography>
            <Typography variant="caption">
              {theme.palette.success.darkHover}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.success.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">
              {theme.palette.success.dark}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.success.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.success.medium}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.success.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">
              {theme.palette.success.main}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.success.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.success.light}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.success.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.success.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Warning
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.warning.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">
              {theme.palette.warning.dark}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.warning.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.warning.medium}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.warning.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">
              {theme.palette.warning.main}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.warning.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.warning.light}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.warning.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.warning.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Error
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.error.darkHover,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark Hover</Typography>
            <Typography variant="caption">
              {theme.palette.error.darkHover}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.error.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">
              {theme.palette.error.dark}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.error.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.error.medium}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.error.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">
              {theme.palette.error.main}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.error.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.error.light}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.error.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.error.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Info
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.info.dark,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Dark</Typography>
            <Typography variant="caption">{theme.palette.info.dark}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.info.medium,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Medium</Typography>
            <Typography variant="caption">
              {theme.palette.info.medium}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.info.main,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Main</Typography>
            <Typography variant="caption">{theme.palette.info.main}</Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.info.light,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Light</Typography>
            <Typography variant="caption">
              {theme.palette.info.light}
            </Typography>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.info.pastel,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Pastel</Typography>
            <Typography variant="caption">
              {theme.palette.info.pastel}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 6 }}>
        Grays
      </Typography>
      <Typography variant="h6">Code example:</Typography>
      <Box
        sx={{
          backgroundColor: theme.palette.gray600,
          padding: 1,
          color: theme.palette.white,
          borderRadius: "8px",
          marginY: 1,
        }}
      >
        <code> theme.palette.border</code>
        <br />
        <code> theme.palette.text.secondary</code>
        <br />
        <code> theme.palette.gray800</code>
      </Box>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Semantic
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.border,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Border</Typography>
            <Typography variant="caption">{theme.palette.border}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.divider,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Divider</Typography>
            <Typography variant="caption">{theme.palette.divider}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.buttonDisabled,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Button Disabled</Typography>
            <Typography variant="caption">
              {theme.palette.buttonDisabled}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Text
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.text.primary,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Primary</Typography>
            <Typography variant="caption">
              {theme.palette.text.primary}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.text.secondary,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Secondary</Typography>
            <Typography variant="caption">
              {theme.palette.text.secondary}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.text.secondaryTransparent,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Secondary Transparent</Typography>
            <Typography variant="caption">
              {theme.palette.text.secondaryTransparent}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.text.disabled,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Disabled</Typography>
            <Typography variant="caption">
              {theme.palette.text.disabled}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.text.white,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">White</Typography>
            <Typography variant="caption">
              {theme.palette.text.white}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Icon
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.icon.primary,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Primary</Typography>
            <Typography variant="caption">
              {theme.palette.icon.primary}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.icon.secondary,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Secondary</Typography>
            <Typography variant="caption">
              {theme.palette.icon.secondary}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.icon.secondaryTransparent,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Secondary Transparent</Typography>
            <Typography variant="caption">
              {theme.palette.icon.secondaryTransparent}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Background
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.background.tooltip,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Tooltip</Typography>
            <Typography variant="caption">
              {theme.palette.background.tooltip}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.background.overlay,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Overlay</Typography>
            <Typography variant="caption">
              {theme.palette.background.overlay}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.background.card,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Card</Typography>
            <Typography variant="caption">
              {theme.palette.background.card}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.background.page,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Page</Typography>
            <Typography variant="caption">
              {theme.palette.background.page}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        Input
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.input.border,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Border</Typography>
            <Typography variant="caption">
              {theme.palette.input.border}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.input.borderDisabled,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Border disabled</Typography>
            <Typography variant="caption">
              {theme.palette.input.borderDisabled}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.input.backgroundDisabled,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Background Disabled</Typography>
            <Typography variant="caption">
              {theme.palette.input.backgroundDisabled}
            </Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.input.background,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Background</Typography>
            <Typography variant="caption">
              {theme.palette.input.background}
            </Typography>
          </Box>
        </Card>
      </Stack>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 2 }}>
        General
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.black,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Black</Typography>
            <Typography variant="caption">{theme.palette.black}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray800,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 800</Typography>
            <Typography variant="caption">{theme.palette.gray800}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray700,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 700</Typography>
            <Typography variant="caption">{theme.palette.gray700}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray600,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 600</Typography>
            <Typography variant="caption">{theme.palette.gray600}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray500,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 500</Typography>
            <Typography variant="caption">{theme.palette.gray500}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray400,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 400</Typography>
            <Typography variant="caption">{theme.palette.gray400}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray300,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 300</Typography>
            <Typography variant="caption">{theme.palette.gray300}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray200,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 200</Typography>
            <Typography variant="caption">{theme.palette.gray200}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray100,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 100</Typography>
            <Typography variant="caption">{theme.palette.gray100}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.gray50,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">Gray 50</Typography>
            <Typography variant="caption">{theme.palette.gray50}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.white,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">White</Typography>
            <Typography variant="caption">{theme.palette.white}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.white36,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">White 36</Typography>
            <Typography variant="caption">{theme.palette.white36}</Typography>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            padding: 0,
            borderRadius: "20px",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            width: "120px",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "80px",
              borderBottom: "1px solid",
              borderColor: theme.palette.border,
              backgroundColor: theme.palette.white50,
            }}
          ></Box>
          <Box
            sx={{ padding: 1.5, background: theme.palette.white, flexGrow: 1 }}
          >
            <Typography variant="body1">White 50</Typography>
            <Typography variant="caption">{theme.palette.white50}</Typography>
          </Box>
        </Card>
      </Stack>
    </>
  );
};
