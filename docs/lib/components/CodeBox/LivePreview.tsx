import React, { useContext } from 'react';
import { LiveContext, LiveError, LivePreview as ReactLivePreviewComponent } from 'react-live';

const ReactLivePreview = ReactLivePreviewComponent as React.ComponentType<
  React.ComponentPropsWithoutRef<'div'> & { Component?: React.ElementType }
>;

export default function LivePreview() {
  const { error } = useContext(LiveContext);
  return (
    <>
      {!error && <ReactLivePreview Component="div" className="live-preview" />}
      <LiveError className="live-error" />
    </>
  );
}
