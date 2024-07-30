import { LangEnum } from "@i18n/lang-selector";
import { Box, Drawer, IconButton } from "@mui/material";
import PagesList from "@/components/global-components/Header/PagesList";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LangSelector from "@/components/global-components/Header/LangSelector";
import Image from "next/image";
import Link from "next/link";
import imageSelect from "@images/image-select";

export default function MobileHeader({ lang, isHome }: { lang: LangEnum; isHome?: boolean }) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      className={"mobile-header"}
      sx={{
        padding: "1rem",
        position: isHome ? "absolute" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1300,
      }}
    >
      <HeaderTop lang={lang} isHome={isHome} toggleDrawer={toggleDrawer} open={open} />
      <DrawerMenu lang={lang} open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
}

const HeaderTop = ({
  lang,
  isHome,
  toggleDrawer,
  open,
}: {
  lang: LangEnum;
  isHome?: boolean;
  toggleDrawer: () => void;
  open: boolean;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box flex={1}>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            zIndex: 1300,
            color: isHome ? (open ? "auto" : "white") : "auto",
            display: "flex",
            transition: "all 0.3s ease-in-out",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            justifyContent: "flex-start",
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Box
        sx={{
          flex: 1,
          zIndex: 1300,
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          height: "5rem",
          width: "100%",
        }}
      >
        <Link href={`/${lang}/`}>
          <Image
            priority
            src={imageSelect.globals.logoPrimary.src}
            alt={imageSelect.globals.logoPrimary.alt}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
      </Box>
      <LangSelector
        lang={lang}
        sx={{ zIndex: 1300, flex: 1, justifyContent: "flex-end" }}
        open={open}
        isHome={isHome}
      />
    </Box>
  );
};

const DrawerMenu = ({ lang, open, toggleDrawer }: { lang: LangEnum; open: boolean; toggleDrawer: () => void }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      transitionDuration={{ enter: 800, exit: 800 }}
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PagesList sx={{}} lang={lang} />
      </Box>
    </Drawer>
  );
};
