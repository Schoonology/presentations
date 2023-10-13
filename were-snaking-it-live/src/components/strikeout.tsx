import React from 'react';
import {Text} from 'spectacle';

export function Strikeout({children, ...props}) {
  return (
    <Text className="strikeout" {...props}>
      {children}
    </Text>
  );
}
