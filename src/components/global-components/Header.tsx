import { contactsLang, galleryLang, homeLang, LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { primaryColor, secondaryColor } from "@/styles/globals";

interface Props {
  lang: LangEnum;
}

function HeaderListItem({
  children,
  href,
  isMobile,
  isSelected,
}: {
  children: ReactNode | ReactNode[];
  href: string;
  isMobile?: boolean;
  isSelected?: boolean;
}) {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <HeaderLink href={href} isMobile={isMobile} isSelected={isSelected}>
        {children}
      </HeaderLink>
    </ListItem>
  );
}

function HeaderLink({
  href,
  children,
  currentLanguage,
  selectedLanguage,
  isMobile,
  isLanguageSelector,
  isSelected,
}: {
  href: string;
  children: ReactNode | ReactNode[];
  currentLanguage?: string;
  selectedLanguage?: string;
  isMobile?: boolean;
  isLanguageSelector?: boolean;
  isSelected?: boolean;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const redirect = (href: string) => {
    window.location.href = href;
  };

  if (currentLanguage && selectedLanguage && currentLanguage === selectedLanguage) {
    return (
      <Typography
        variant={"h6"}
        sx={{ fontWeight: "bold", userSelect: "none", fontSize: isMobile ? "2rem" : "1.2rem" }}
      >
        {children}
      </Typography>
    );
  }
  const onClick = () => {
    document.getElementById("language-selector-link")!.style.cursor = "default";
    redirect(href);
  };
  return isLanguageSelector ? (
    <Typography
      id={"language-selector-link"}
      onClick={onClick}
      variant={"h6"}
      sx={{ fontSize: isMobile ? "2rem" : "1.2rem", cursor: "pointer" }}
    >
      {children}
    </Typography>
  ) : (
    <Link
      href={href}
      onMouseOver={() => !isSelected && setIsHovering(true)}
      onMouseLeave={() => !isSelected && setIsHovering(false)}
    >
      <Typography variant={"h6"} sx={{ fontSize: isMobile ? "2rem" : "1.2rem" }}>
        {children}
      </Typography>
      <Box
        sx={{
          width: isHovering || isSelected ? "100%" : 0,
          height: "1px",
          backgroundColor: secondaryColor,
          transition: "width 300ms ease-in-out",
        }}
      ></Box>
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
        isLanguageSelector
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
        isLanguageSelector
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
        width: "100%",
        height: "calc(100vh - 120px)",
        transform: isActive ? "translateX(0)" : "translateX(-100%)",
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
        alignItems: "center",
        width: { md: "60vw", lg: "60vw", xl: "800px" },
      }}
    >
      <HeaderMenu lang={lang} />
    </Container>
  );
}

function HeaderMenu({ lang, isMobile }: { lang: LangEnum; isMobile?: boolean }) {
  const selectedOption = useRouter().asPath.slice(4).split("#")[0];
  useEffect(() => {
    console.log("selectedOption:", selectedOption);
  });
  return (
    <List
      sx={{
        display: "flex",
        ...(isMobile && { flexDirection: "column", alignItems: "center" }),
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <HeaderListItem isMobile={isMobile} href={`/${lang}/`} isSelected={!selectedOption.length}>
        {homeLang(lang, "title")}
      </HeaderListItem>
      <HeaderListItem isMobile={isMobile} href={`/${lang}/services`} isSelected={selectedOption === "services"}>
        {servicesLang(lang, "title")}
      </HeaderListItem>
      <HeaderListItem isMobile={isMobile} href={`/${lang}/gallery`} isSelected={selectedOption === "gallery"}>
        {galleryLang(lang, "title")}
      </HeaderListItem>
      <HeaderListItem isMobile={isMobile} href={`/${lang}/catering`} isSelected={selectedOption === "catering"}>
        Catering
      </HeaderListItem>
      <HeaderListItem isMobile={isMobile} href={`/${lang}/faq`} isSelected={selectedOption === "faq"}>
        FAQ
      </HeaderListItem>
      <HeaderListItem isMobile={isMobile} href={`/${lang}/contacts`} isSelected={selectedOption === "contacts"}>
        {contactsLang(lang, "title")}
      </HeaderListItem>
    </List>
  );
}

export default function Header({ lang }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive && <Box width={"100%"} height={"120px"} />}
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
