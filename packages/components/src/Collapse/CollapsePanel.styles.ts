import styled from 'styled-components';
import RcCollapse from 'rc-collapse';

export const StyledCollapsePanel = styled(RcCollapse.Panel)`
  .kubed-collapse-header {
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: ${({ collapsible }) => (collapsible === 'disabled' ? 0.5 : '')};
    cursor: ${({ collapsible }) => {
      if (collapsible === 'header' || collapsible === 'icon') {
        return '';
      }

      if (collapsible === 'disabled') {
        return 'not-allowed';
      }

      return 'pointer';
    }};

    & > .kubed-collapse-expand-icon,
    & > .kubed-collapse-header-text {
      cursor: ${({ collapsible }) => (collapsible === 'header' ? 'pointer' : '')};
    }

    .kubed-collapse-expand-icon {
      display: flex;
      cursor: ${({ collapsible }) => (collapsible === 'icon' ? 'pointer' : '')};
    }
  }
`;
