import React from "react";
import Section from "../utils/components/Section";
import ContentSectionFirst from "../components/Home/ContentSectionFirst";

export default function HomePage() {
  return (
    <div className="home_page  h-full my-10 caret-transparent">
      <Section
        img="section-img-1.jpg"
        children={<ContentSectionFirst />}
        background="#00b388"
      />
      <Section
        img="section-img-1.jpg"
        children={<ContentSectionFirst />}
        background="#00b388"
      />
      <Section
        img="section-img-1.jpg"
        children={<ContentSectionFirst />}
        background="#00b388"
      />
      <Section
        img="section-img-1.jpg"
        children={<ContentSectionFirst />}
        background="#00b388"
      />
    </div>
  );
}
