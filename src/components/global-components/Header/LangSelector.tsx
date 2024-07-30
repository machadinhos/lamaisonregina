import { LangEnum } from "@i18n/lang-selector";
import { useRouter } from "next/router";
import { Box, IconButton, Theme, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";

export default function LangSelector({
  lang,
  sx,
  open,
  isHome,
  fontSize,
}: {
  lang: LangEnum;
  sx?: SxProps<Theme>;
  open?: boolean;
  isHome?: boolean;
  fontSize?: string;
}) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Box display={"flex"} sx={sx}>
      <LangOption
        fontSize={fontSize}
        isHome={isHome}
        open={open}
        lang={lang}
        option={"pt"}
        href={`/pt/${path.substring(4).replace("header", "").replace("#", "")}`}
      />
      <Typography
        sx={{
          userSelect: "none",
          color: isHome ? (open ? "auto" : "white") : "auto",
          transition: "color 0.3s ease-in-out",
          ...(fontSize && { fontSize }),
        }}
      >
        |
      </Typography>
      <LangOption
        fontSize={fontSize}
        isHome={isHome}
        open={open}
        lang={lang}
        option={"en"}
        href={`/en/${path.substring(4).replace("header", "").replace("#", "")}`}
      />
    </Box>
  );
}

const LangOption = ({
  lang,
  option,
  href,
  open,
  isHome,
  fontSize,
}: {
  lang: LangEnum;
  option: string;
  href: string;
  open?: boolean;
  isHome?: boolean;
  fontSize?: string;
}) => {
  const refreshLang = (href: string) => {
    if (option === lang) return;
    window.location.href = href;
  };

  return (
    <IconButton sx={{ m: 0, p: 0, height: "fit-content" }}>
      <Typography
        onClick={() => refreshLang(href)}
        variant={"body1"}
        sx={{
          mx: "0.25rem",
          color: isHome ? (open ? "auto" : "white") : "auto",
          transition: "color 0.3s ease-in-out",
          fontWeight: option === lang ? 600 : 300,
          cursor: option === lang ? "default" : "pointer",
          ...(fontSize && { fontSize }),
        }}
      >
        {option.toUpperCase()}
      </Typography>
    </IconButton>
  );
};
