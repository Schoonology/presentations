import React from 'react';

export function OverlayContainer({children}) {
  return <div style={{position: 'relative'}}>{children}</div>;
}

export function OverlayText({children, left, top, angle}) {
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        transform: `translate(-50%,-50%) rotate(${angle})`,
      }}>
      {children}
    </div>
  );
}
