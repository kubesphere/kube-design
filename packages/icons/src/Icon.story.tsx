import * as React from 'react';
import * as Icons from '@kubed/icons';
import styled from 'styled-components';
import icons from '../dist/icons.json';

console.log(icons);

export default {
  title: 'Icons/Icon',
  component: Icons,
};

const SectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const SectionContent = styled.div`
  width: 100%;
  padding-left: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 20px;
`;

const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(238, 239, 240);
  border-radius: 3px;

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
}

const Icon = ({ name, ...rest }: IconProps, ref?: any) => {
  // @ts-ignore
  const IconElement = Icons[name];
  if (!IconElement) {
    throw new Error(`Icon with name: ${name} was not found!`);
  }
  return <IconElement ref={ref} {...rest} />;
};

export const basic = () => {
  return (
    <>
      {Object.keys(icons).map((key) => {
        return (
          <Section key={key}>
            <SectionTitle>{key}</SectionTitle>
            <SectionContent>
              {icons[key].map((item) => (
                <SectionItem key={item}>
                  <Icon name={item} size={40} />
                  <div className="icon-name">{item}</div>
                </SectionItem>
              ))}
            </SectionContent>
          </Section>
        );
      })}
    </>
  );
};
