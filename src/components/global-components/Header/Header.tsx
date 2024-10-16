import { LangEnum } from "@i18n/lang-selector";
import { useMediaQuery } from "@mui/system";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import MobileHeader from "@/components/global-components/Header/MobileHeader";
import DesktopHeader from "@/components/global-components/Header/DesktopHeader";

interface Props {
  lang: LangEnum;
  isHome?: boolean;
}

function Header({ lang, isHome }: Props) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header id={"header"}>
      <Box sx={{ opacity: isMounted ? 1 : 0 }}>
        {isSmallScreen ? <MobileHeader isHome={isHome} lang={lang} /> : <DesktopHeader isHome={isHome} lang={lang} />}
      </Box>
    </header>
  );
}

export default Header;
