import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers
} from "@kubed/tests";
import {Empty} from './Empty';

describe('@kubed/components/Empty',()=>{
  itRendersChildren(Empty,{});
  itSupportsClassName(Empty,{});
  itSupportsStyle(Empty,{});
  itSupportsOthers(Empty,{});
  it('has correct displayName',()=>{
    expect(Empty.displayName).toEqual('@kubed/components/Empty');
  })
});
