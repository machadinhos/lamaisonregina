import { LangEnum } from "@i18n/lang-selector";
import { Box, Drawer, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import imageSelect from "@images/image-select";

import LangSelector from "@/components/global-components/Header/LangSelector";
import PagesList from "@/components/global-components/Header/PagesList";
import HomeBackFade, { MainBoxType } from "@/components/global-components/Header/HomeBackFade";

export default function MobileHeader({ lang, isHome }: { lang: LangEnum; isHome?: boolean }) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const mainBoxRef = useRef<HTMLElement>();

  const [mainBox, setMainBox] = useState<MainBoxType>();

  useEffect(() => {
    if (mainBoxRef.current) {
      const rect = mainBoxRef.current.getBoundingClientRect();

      setMainBox({
        height: rect.height,
      });
    }
  }, [mainBoxRef]);

  return (
    <>
      <Box
        ref={mainBoxRef}
        className={"mobile-header"}
        id={"test"}
        sx={{
          padding: "1rem",
          position: isHome ? "absolute" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <HomeBackFade isHome={isHome} mainBox={mainBox} />
        <HeaderTop isHome={isHome} lang={lang} open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
        <DrawerMenu lang={lang} open={open} toggleDrawer={toggleDrawer} />
      </Box>
    </>
  );
}

const HeaderTop = ({
  lang,
  isHome,
  toggleDrawer,
  open,
  setOpen,
}: {
  lang: LangEnum;
  isHome?: boolean;
  toggleDrawer: () => void;
  open: boolean;
  setOpen: (openValue: boolean) => void;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "top" }}>
      <Box flex={1}>
        <IconButton
          sx={{
            zIndex: 1300,
            color: isHome ? (open ? "auto" : "white") : "auto",
            display: "flex",
            transition: "all 0.3s ease-in-out",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            justifyContent: "flex-start",
          }}
          onClick={toggleDrawer}
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
        }}
      >
        <IconButton disableRipple sx={{ p: 0, m: 0, pt: "8px" }}>
          <Link href={`/${lang}/`}>
            <Image
              priority
              alt={imageSelect.globals.logoPrimary.alt}
              height={315 / 2.6}
              src={imageSelect.globals.logoPrimary.src}
              style={{
                objectFit: "contain",
              }}
              width={412 / 2.6}
              onClick={() => {
                setOpen(false);
              }}
            />
          </Link>
        </IconButton>
      </Box>
      <LangSelector
        isHome={isHome}
        lang={lang}
        open={open}
        sx={{ zIndex: 1300, flex: 1, justifyContent: "flex-end" }}
      />
    </Box>
  );
};

const DrawerMenu = ({ lang, open, toggleDrawer }: { lang: LangEnum; open: boolean; toggleDrawer: () => void }) => {
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
        },
      }}
      anchor="left"
      open={open}
      transitionDuration={{ enter: 800, exit: 800 }}
      onClose={toggleDrawer}
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
        <PagesList lang={lang} toggleMobileDrawer={toggleDrawer} />
      </Box>
    </Drawer>
  );
};
