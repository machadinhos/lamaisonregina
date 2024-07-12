import { LangEnum } from "@i18n/lang-selector";
import React from "react";
import { WhyChooseList } from "@/components/page-components/Home/WhyChooseList";
import { HomeInfo } from "@/components/page-components/Home/HomeInfo";
import CTA from "@/components/shared-components/CTA";
import ImagesDiv from "@/components/shared-components/ImagesDiv";

interface Props {
  lang: LangEnum;
}

export default function Home({ lang }: Props) {
  const imagesDivSrc: [string, string, string] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9XS3ID9efwKEYMwoN5ERUZihz1ZZYDJj4Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0PhDnJ_R3aDOR6PgiaslwczQBFFVbi0jdQ&s",
    "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/06/24163743/Shrek-Burro-Spin-Off.jpg",
  ];

  return (
    <>
      <HomeInfo lang={lang} />
      <WhyChooseList lang={lang} />
      <ImagesDiv imagesSrc={imagesDivSrc} />
      <CTA lang={lang} />
    </>
  );
}
