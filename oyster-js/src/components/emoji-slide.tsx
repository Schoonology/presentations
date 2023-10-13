import React from "react";
import { Heading, SlideLayout } from "spectacle";

type EmojiSlideProps = {
  children: string;

  count?: number;
  size?: string | number;
};

export function EmojiSlide({ children, count, size }: EmojiSlideProps) {
  let formatted = new Array(count ?? 1).fill(children).join("");

  return (
    <SlideLayout.Center>
      <Heading fontSize={size || "25vh"}>{formatted}</Heading>
    </SlideLayout.Center>
  );
}
