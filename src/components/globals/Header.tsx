import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function HeaderListItem({ children, href }: { children: ReactNode | ReactNode[]; href: string }) {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <HeaderLink href={href}>{children}</HeaderLink>
    </ListItem>
  );
}

function HeaderLink({ href, children }: { href: string; children: ReactNode | ReactNode[] }) {
  return (
    <Link href={href}>
      <Typography variant={"h6"}>{children}</Typography>
    </Link>
  );
}

function LanguageSelector({ lang }: { lang: LangEnum }) {
  const router = useRouter();
  const path = router.asPath;
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
      <HeaderLink href={`/pt/${path.substring(4)}`}>PT</HeaderLink>
      <Typography variant={"h5"}>{" | "}</Typography>
      <HeaderLink href={`/en/${path.substring(4)}`}>EN</HeaderLink>
    </Box>
  );
}

interface Props {
  lang: LangEnum;
}

export default function Header({ lang }: Props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <LanguageSelector lang={lang} />
      <Image alt={"logo"} src={"/logo.png"} width={150} height={150} />
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "60vw" }}>
        <List sx={{ display: "flex", width: "80vw", justifyContent: "space-evenly" }}>
          <HeaderListItem href={`/${lang}/`}>{selectLang(lang, "home")} </HeaderListItem>
          <HeaderListItem href={`/${lang}/services`}>{selectLang(lang, "services")} </HeaderListItem>
          <HeaderListItem href={`/${lang}/gallery`}>{selectLang(lang, "gallery")}</HeaderListItem>
          <HeaderListItem href={`/${lang}/contacts`}>{selectLang(lang, "contacts")}</HeaderListItem>
          <HeaderListItem href={`/${lang}/faq`}>FAQ</HeaderListItem>
        </List>
      </Container>
    </Container>
  );
}