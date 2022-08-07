import * as React from 'react';
import { ShowMore } from './ShowMore';

export default {
  title: 'Components/ShowMore',
  component: ShowMore,
};

export const Basic = () => {
  const showLabel = <a>Show more</a>;
  const hideLabel = <a>Hide</a>;

  return (
    <ShowMore maxHeight={20} hideLabel={hideLabel} showLabel={showLabel} transitionDuration={200}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla purus, porta ac eros
      dignissim, pharetra tincidunt ante. Donec lacus magna, ultricies id lacinia tempor, efficitur
      a quam. Cras ac eros ac ante tempor lacinia. Pellentesque interdum, lorem a euismod efficitur,
      enim nunc viverra mauris, vel tincidunt nisi neque quis dolor. Donec mollis ornare ipsum, a
      auctor urna faucibus egestas. Nullam quam massa, accumsan id rhoncus eu, volutpat eu turpis.
      Pellentesque orci tortor, suscipit eu accumsan eu, aliquet at justo. Nulla in est at ligula
      eleifend sagittis vitae at velit.
    </ShowMore>
  );
};
