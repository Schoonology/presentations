import React, {useEffect, useRef} from 'react';
import {OrderedList, ListItem, UnorderedList} from 'spectacle';
import {THEME} from '../theme';
import {useFit} from '../hooks';

export function ThemedOrderedList({children, fit, ...props}) {
  const ref = useFit(fit);

  return (
    <OrderedList ref={props.ref ?? ref} style={{marginLeft: '1em'}} {...props}>
      {children}
    </OrderedList>
  );
}

export function ThemedUnorderedList({children, fit, ...props}) {
  const ref = useFit(fit);

  return (
    <UnorderedList ref={props.ref ?? ref} {...props}>
      {children}
    </UnorderedList>
  );
}

export function ThemedListItem({children, ...props}) {
  return (
    <ListItem style={{color: THEME.colors.quaternary}} {...props}>
      <span style={{color: THEME.colors.primary}}>{children}</span>
    </ListItem>
  );
}
