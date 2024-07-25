import { LangEnum } from "@i18n/lang-selector";
import React from "react";
import { WhyChooseList } from "@/components/page-components/Home/WhyChooseList";
import { HomeInfo } from "@/components/page-components/Home/HomeInfo";
import CTA from "@/components/shared-components/CTA";
import ImagesDiv from "@/components/shared-components/ImagesDiv";
import { HomeCarousel } from "@/components/page-components/Home/HomeCarousel";
import imageSelect from "@images/ImageSelect";

interface Props {
  lang: LangEnum;
}

export default function Home({ lang }: Props) {
  return (
    <>
      <HomeCarousel lang={lang} />
      <HomeInfo lang={lang} />
      <WhyChooseList lang={lang} />
      <ImagesDiv images={imageSelect.home.imagesDiv} />
      <CTA lang={lang} />
    </>
  );
}
