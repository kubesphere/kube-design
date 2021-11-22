import { Popover } from './Popover';
import {shallowWithTheme} from "@kubed/tests";
import {Badge, Button, Tooltip} from "@kubed/components";
import React from "react";
import {Tool} from "react-feather";


describe('@kubed/components/Popover', () => {

  it('renders given color and shadow', () => {
    const element = shallowWithTheme(
      <Popover title="popover title" content="Display additional, floating content on click">
        <Button radius="xl">KubeSphere</Button>
      </Popover>
    );
    expect(element.find(Popover).prop('title')).toBe('popover title');
    expect(element.find(Popover).prop('content')).toBe('Display additional, floating content on click');
  });

  it('has correct displayName', () => {
    expect(Popover.displayName).toEqual('@kubed/components/Popover');
  });
});
