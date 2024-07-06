import { galleryLang, LangEnum } from "@i18n/lang-selector";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";
import CTA from "@/components/shared-components/CTA";
import React from "react";
import ArrowCarousel from "@/components/shared-components/Carousel/ArrowCarousel";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  const images1 = [
    "https://www.portugalafora.com/wp-content/uploads/2018/09/portugalafora_porto_ponteDluis01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d3/ac/21/ponte-sobre-o-rio-lima.jpg?w=1200&h=1200&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAQQbSHOTEKxhOACKv8nIkHn96oNetBXqaw&s",
  ];

  const images2 = [
    "https://www.portugalafora.com/wp-content/uploads/2018/09/portugalafora_porto_ponteDluis01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d3/ac/21/ponte-sobre-o-rio-lima.jpg?w=1200&h=1200&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAQQbSHOTEKxhOACKv8nIkHn96oNetBXqaw&s",
  ];

  const images3 = [
    "https://www.portugalafora.com/wp-content/uploads/2018/09/portugalafora_porto_ponteDluis01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d3/ac/21/ponte-sobre-o-rio-lima.jpg?w=1200&h=1200&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAQQbSHOTEKxhOACKv8nIkHn96oNetBXqaw&s",
  ];

  const images4 = [
    "https://www.portugalafora.com/wp-content/uploads/2018/09/portugalafora_porto_ponteDluis01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d3/ac/21/ponte-sobre-o-rio-lima.jpg?w=1200&h=1200&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAQQbSHOTEKxhOACKv8nIkHn96oNetBXqaw&s",
  ];

  return (
    <>
      <GenericPageMainTitle>{galleryLang(lang, "title")}</GenericPageMainTitle>
      <section style={{ width: "100%", height: "100%" }}>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-1")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-1")}</GenericPageText>
        <ArrowCarousel images={images1} />
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-2")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-2")}</GenericPageText>
        <ArrowCarousel images={images2} />
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-3")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-3")}</GenericPageText>
        <ArrowCarousel images={images3} />
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-4")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-4")}</GenericPageText>
        <ArrowCarousel images={images4} />
      </section>
      <CTA lang={lang} />
    </>
  );
}
