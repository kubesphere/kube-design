import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from "@kubed/components";
import {ThemeProvider} from "styled-components";
import {themeUtils} from "@kubed/components";

const defaultProps = {
  title:'test',
  placement: 'bottom',
  children: null,
  interactive: true,
  trigger: 'click',
  hideOnClick: true,
  arrow: false,
  maxWidth: 210,
  animation: 'shift-away',
  content:'test-dropdown',
};

describe('@kubed/components/Dropdown', () => {

  it('passes animation, arrow, trigger and placement props to Dropdown component', () => {
    const props = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Dropdown {...defaultProps} />
      </ThemeProvider>
    )
      .find(Dropdown);
    expect(props.prop('animation')).toBe('shift-away');
    expect(props.prop('trigger')).toBe('click');
    expect(props.prop('placement')).toBe('bottom');
    expect(props.prop('arrow')).toBe(false);
  });

  // it('sets correct id and aria-labelledby props on listbox', () => {
  //   const props = shallow(<Dropdown {...defaultProps} />)
  //     .find(Transition)
  //     .dive()
  //     .find('[role="listbox"]')
  //     .props();
  //   expect(props.id).toBe('test-id-items');
  //   expect(props['aria-labelledby']).toBe('test-id-label');
  // });

  it('has correct displayName', () => {
    expect(Dropdown.displayName).toEqual('@kubed/components/Dropdown');
  });
});
