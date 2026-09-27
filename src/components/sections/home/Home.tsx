import React from "react";

import { HomeCarousel } from "@/components/sections/home/HomeCarousel";
import { HomeInfo } from "@/components/sections/home/HomeInfo";
import { WhyChooseList } from "@/components/sections/home/WhyChooseList";
import CTA from "@/components/ui/CTA";
import ImagesDiv from "@/components/ui/ImagesDiv";
import imageSelect from "@/data/images";
import { LangEnum } from "@/i18n";

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
