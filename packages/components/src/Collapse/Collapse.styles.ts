import styled from 'styled-components';
import RcCollapse from 'rc-collapse';

export const StyledCollapse = styled(RcCollapse)`
  .kubed-collapse-content-hidden {
    display: none;
  }

  .motion-collapse {
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }
`;
