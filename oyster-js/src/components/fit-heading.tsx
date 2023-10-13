import fitty from "fitty";
import React, { useEffect, useRef } from "react";
import { Heading } from "spectacle";

export function FitHeading({ children, ...props }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      fitty(ref.current);
    }
  }, [ref.current]);

  return (
    <Heading ref={ref} {...props}>
      {children}
    </Heading>
  );
}
