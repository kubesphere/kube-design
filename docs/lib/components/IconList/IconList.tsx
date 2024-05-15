import * as KubeIcon from '@kubed/icons';
import styled from 'styled-components';
import { Text, notify, Notify } from "@kubed/components";
import { useClipboard } from "@kubed/hooks";

const Content = styled.div`
  cursor: pointer;
  width: 100px;
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_1};
  }
`;
const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 90px);
  grid-gap: 5px;
`;

const IconList = () => {
  const icons = Object.entries(KubeIcon);
  const { copy } = useClipboard()
  const renderIconList = () => {
    return icons.map((icon) => {
      const [iconName, Svg] = icon;
      return (
        <Content key={iconName} onClick={() => {
          const copyElement = `<${iconName}/>`
          copy(copyElement)
          notify.success(copyElement+ ' copied 🎉')
        }}>
          <Svg size={48} />
          <Text>{iconName}</Text>
        </Content>
      );
    });
  };

  return <GridContent>{renderIconList()}<Notify position="top-right" /></GridContent>;
};

export default IconList;
