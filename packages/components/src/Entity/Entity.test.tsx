import React from 'react';
import {Entity, Field} from "@kubed/components";
import {itSupportsRef, shallowWithTheme} from '@kubed/tests';

describe('@kubed/components/Entity',()=>{
  // @ts-ignore
  // itSupportsRef(Entity,{});

  it('has correct displayName',()=>{
    expect(Entity.displayName).toEqual('@kubed/components/Entity');
  });

  it('renders hoverable and footer',()=>{
    const wrapper = shallowWithTheme(
      <Entity hoverable footer='null'>
        <Field label="访问模式" value="ReadWriteOnce" />
      </Entity>
    );
    expect(wrapper.find(Entity).prop('hoverable')).toBe(true);
    expect(wrapper.find(Entity).prop('footer')).toBe('null');
  })
});
