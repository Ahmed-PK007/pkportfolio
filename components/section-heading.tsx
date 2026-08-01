"use client";

import { memo } from "react";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
};

function SectionHeadingComponent({ index, eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <div>
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

export const SectionHeading = memo(SectionHeadingComponent);
