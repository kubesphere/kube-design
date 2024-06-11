import styled from 'styled-components';
import { notify, Notify } from '@kubed/components';
import { useClipboard } from '@kubed/hooks';
import * as React from 'react';
import * as Icons from '@kubed/icons';
import ICONS from '@kubed/icons/dist/icons.json';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const SectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
`;
const SectionContent = styled.div`
  width: 100%;
  padding-left: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
`;
const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_1};
  }

  .icon-name {
    margin-top: 10px;
    color: rgb(101, 109, 126);
  }
`;

interface IconProps {
  name: string;
  color?: string;
  variant?: 'dark' | 'light' | 'coloured' | string;
  size?: number | string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const Icon = ({ name, ...rest }: IconProps) => {
  const IconElement = Icons[name];
  if (!IconElement) {
    throw new Error(`Icon with name: ${name} was not found!`);
  }
  return <IconElement {...rest} />;
};

const IconList = () => {
  const { copy } = useClipboard();
  const renderIcons = () => {
    return (
      <div>
        {Object.keys(ICONS).map((key) => {
          return (
            <Section key={key}>
              <SectionTitle>{key}</SectionTitle>
              <SectionContent>
                {ICONS[key].map((name) => (
                  <SectionItem key={name}>
                    <Icon
                      onClick={() => {
                        const copyElement = `<${name}/>`;
                        copy(copyElement);
                        notify.success(`${copyElement} copied 🎉`);
                      }}
                      name={name}
                      size={40}
                    />
                    <div className="icon-name">{name}</div>
                  </SectionItem>
                ))}
              </SectionContent>
            </Section>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {renderIcons()}
      <Notify position="top-right" />
    </>
  );
};

export default IconList;
