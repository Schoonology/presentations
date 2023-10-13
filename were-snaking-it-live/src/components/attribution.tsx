import React from 'react';
import {Text} from 'spectacle';

export function Attribution({children, attrib, ...props}) {
  return (
    <div style={{position: 'relative'}} {...props}>
      {children}
      <Text style={{opacity: 0.5, position: 'absolute', bottom: 0, right: 0}}>
        {attrib}
      </Text>
    </div>
  );
}
