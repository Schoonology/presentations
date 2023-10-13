import React from 'react';
import {FlexBox} from 'spectacle';

export function Column({children, ...props}) {
  return (
    <FlexBox flexDirection="column" height="100%" width="100%" {...props}>
      {children}
    </FlexBox>
  );
}

export function Row({children, ...props}) {
  return (
    <FlexBox flexDirection="row" height="100%" width="100%" {...props}>
      {children}
    </FlexBox>
  );
}
