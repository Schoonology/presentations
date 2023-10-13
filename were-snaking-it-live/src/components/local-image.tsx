import React from 'react';
import {Image, Slide} from 'spectacle';

export function LocalImage({data, ...props}) {
  return (
    <div style={{position: 'relative'}}>
      <Image alt={data.alt} src={data.src} {...props} />
      <p style={{position: 'absolute', bottom: 0, right: 0}}>{data.attrib}</p>
    </div>
  );
}
