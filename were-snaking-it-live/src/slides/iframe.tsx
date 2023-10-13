import React from 'react';
import {Slide} from 'spectacle';

type IframeProps = {
  src: string;
};

export function Iframe({src}: IframeProps) {
  return (
    <iframe
      src={src}
      style={{border: 0, margin: '0 auto'}}
      height="90%"
      width="85%"
    />
  );
}

export function IframeSlide({src}: IframeProps) {
  return (
    <Slide>
      <iframe
        src={src}
        style={{border: 0, margin: '0 auto'}}
        height="90%"
        width="85%"
      />
    </Slide>
  );
}
