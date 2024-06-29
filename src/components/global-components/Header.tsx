import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { primaryColor } from "@/styles/globals";
import useScreenWidth from "@/hooks/use-screen-width";

interface Props {
  lang: LangEnum;
}

function HeaderListItem({ children, href }: { children: ReactNode | ReactNode[]; href: string }) {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <HeaderLink href={href}>{children}</HeaderLink>
    </ListItem>
  );
}

function HeaderLink({
  href,
  children,
  currentLanguage,
  selectedLanguage,
}: {
  href: string;
  children: ReactNode | ReactNode[];
  currentLanguage?: string;
  selectedLanguage?: string;
}) {
  if (currentLanguage && selectedLanguage && currentLanguage === selectedLanguage) {
    return (
      <Typography variant={"h6"} sx={{ fontWeight: "bold", userSelect: "none", fontSize: "1.2rem" }}>
        {children}
      </Typography>
    );
  }
  return (
    <Link href={href}>
      <Typography variant={"h6"} sx={{ fontSize: "1.2rem" }}>
        {children}
      </Typography>
    </Link>
  );
}

function LanguageSelector() {
  const router = useRouter();
  const path = router.asPath;
  const currentLang = path.substring(1, 3);
  return (
    <Box
      sx={{
        position: "absolute",
        width: "70px",
        right: 30,
        top: 30,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <HeaderLink
        href={`/pt/${path.substring(4).replace("header", "").replace("#", "")}`}
        currentLanguage={currentLang}
        selectedLanguage={"pt"}
      >
        PT
      </HeaderLink>
      <Typography sx={{ userSelect: "none" }} variant={"h5"}>
        {" | "}
      </Typography>
      <HeaderLink
        href={`/en/${path.substring(4).replace("header", "").replace("#", "")}`}
        currentLanguage={currentLang}
        selectedLanguage={"en"}
      >
        EN
      </HeaderLink>
    </Box>
  );
}

function MobileMenu({
  lang,
  setIsActive,
  isActive,
}: {
  lang: LangEnum;
  setIsActive: (value: boolean) => void;
  isActive: boolean;
}) {
  const spanStyle = {
    width: "25px",
    height: "3px",
    backgroundColor: "black",
  };
  return (
    <>
      <Box
        position={"absolute"}
        top={40}
        left={30}
        display={{ xs: "flex", sm: "none" }}
        flexDirection={"column"}
        gap={"5px"}
        justifyContent={"center"}
        onClick={() => setIsActive(!isActive)}
      >
        <span style={spanStyle}></span>
        <span style={spanStyle}></span>
        <span style={spanStyle}></span>
      </Box>
      <MobileSlider lang={lang} isActive={isActive} />
    </>
  );
}

function MobileSlider({ lang, isActive }: { lang: LangEnum; isActive: boolean }) {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        backgroundColor: primaryColor,
        zIndex: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "120px",
        left: 0,
        width: "100vw",
        height: "calc(100vh - 120px)",
        transform: isActive ? "translateX(0)" : "translateX(-100vw)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <HeaderMenu lang={lang} isMobile />
    </Box>
  );
}

function DesktopMenu({ lang }: Props) {
  return (
    <Container
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60vw",
      }}
    >
      <HeaderMenu lang={lang} />
    </Container>
  );
}

function HeaderMenu({ lang, isMobile }: { lang: LangEnum; isMobile?: boolean }) {
  return (
    <List
      sx={{
        display: "flex",
        ...(isMobile && { flexDirection: "column", alignItems: "center" }),
        width: "80vw",
        justifyContent: "space-evenly",
      }}
    >
      <HeaderListItem href={`/${lang}/`}>{selectLang(lang, "home")}</HeaderListItem>
      <HeaderListItem href={`/${lang}/services`}>{selectLang(lang, "services")}</HeaderListItem>
      <HeaderListItem href={`/${lang}/catering`}>Catering</HeaderListItem>
      <HeaderListItem href={`/${lang}/gallery`}>{selectLang(lang, "gallery")}</HeaderListItem>
      <HeaderListItem href={`/${lang}/contacts`}>{selectLang(lang, "contacts")}</HeaderListItem>
      <HeaderListItem href={`/${lang}/faq`}>FAQ</HeaderListItem>
    </List>
  );
}

export default function Header({ lang }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive && <Box width={"100vw"} height={"120px"} />}
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: primaryColor,
          position: isActive ? "fixed" : "relative",
          ...(isActive && { top: 0, left: 0 }),
          height: { xs: "120px", sm: "150px" },
          zIndex: 20,
        }}
        id={"header"}
      >
        <LanguageSelector />
        <Link href={`/${lang}/`}>
          <Box position={"relative"} mt={"1rem"} width={"100px"} sx={{ aspectRatio: "1.3/1" }}>
            <Image alt={"logo"} src={"/logo.png"} fill />
          </Box>
        </Link>
        <MobileMenu setIsActive={setIsActive} isActive={isActive} lang={lang} />
        <DesktopMenu lang={lang} />
      </Container>
    </>
  );
}
