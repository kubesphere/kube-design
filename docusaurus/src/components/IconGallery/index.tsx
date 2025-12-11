import React, { useState, useMemo } from 'react';
import * as Icons from '@kubed/icons';
import styled from 'styled-components';
import iconsData from '@kubed/icons/dist/icons.json';

const Container = styled.div`
  margin: 2rem 0;
`;

const SearchBox = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 6px;
  margin-bottom: 2rem;
  outline: none;
  transition: border-color 0.2s;
  background: var(--ifm-background-surface-color);
  color: var(--ifm-font-color-base);

  &:focus {
    border-color: var(--ifm-color-primary);
    box-shadow: 0 0 0 3px var(--ifm-color-primary-light);
  }

  &::placeholder {
    color: var(--ifm-color-emphasis-600);
  }
`;

const CategorySection = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--ifm-color-emphasis-300);
  text-transform: capitalize;
  color: var(--ifm-heading-color);
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0.75rem;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--ifm-background-surface-color);
  position: relative;

  &:hover {
    border-color: var(--ifm-color-primary);
    box-shadow: 0 2px 8px var(--ifm-color-primary-lighter);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 0.75rem;
  color: var(--ifm-font-color-base);
`;

const IconName = styled.div`
  font-size: 0.75rem;
  color: var(--ifm-color-emphasis-700);
  text-align: center;
  word-break: break-word;
  line-height: 1.3;
`;

const CopiedToast = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 0.875rem;
  font-weight: 500;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? 0 : '10px')});
  transition: all 0.3s;
  pointer-events: none;
  z-index: 9999;
`;

const StatsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background: var(--ifm-color-emphasis-100);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--ifm-color-emphasis-700);
`;

const CategoryNameMap: Record<string, string> = {
  appcenter: '应用中心',
  company: '公司/品牌',
  direction: '方向/箭头',
  language: '编程语言',
  object: '对象',
  operation: '操作',
  os: '操作系统',
  abstract: '抽象',
  arrow: '箭头',
  brands: '品牌',
  chart: '图表',
  feedback: '反馈',
  file: '文件',
  form: '表单',
  layout: '布局',
  map: '地图',
  media: '媒体',
  money: '金融',
  notification: '通知',
  other: '其他',
  person: '人物',
  physical: '实体',
  service: '服务',
  time: '时间',
};

interface IconGalleryProps {
  category?: string;
  size?: number;
}

export default function IconGallery({ category, size = 32 }: IconGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    const icons: Record<string, string[]> = iconsData as Record<string, string[]>;
    const filtered: Record<string, string[]> = {};

    // Filter by category if specified
    const categoriesToShow = category ? [category] : Object.keys(icons);

    categoriesToShow.forEach((cat) => {
      if (!icons[cat]) return;

      const categoryIcons = icons[cat].filter((iconName) =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (categoryIcons.length > 0) {
        filtered[cat] = categoryIcons;
      }
    });

    return filtered;
  }, [searchTerm, category]);

  const totalIcons = useMemo(() => {
    return Object.values(filteredIcons).reduce((sum, icons) => sum + icons.length, 0);
  }, [filteredIcons]);

  const handleCopyIcon = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const Icon = ({ name }: { name: string }) => {
    // @ts-ignore
    const IconComponent = Icons[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} />;
  };

  return (
    <Container>
      <SearchBox
        type="text"
        placeholder="搜索图标..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <StatsBar>
        <span>共 {totalIcons} 个图标</span>
        <span>点击图标复制名称</span>
      </StatsBar>

      {Object.keys(filteredIcons).length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          未找到匹配的图标
        </div>
      ) : (
        Object.entries(filteredIcons).map(([categoryKey, icons]) => (
          <CategorySection key={categoryKey}>
            <CategoryTitle>
              {CategoryNameMap[categoryKey] || categoryKey} ({icons.length})
            </CategoryTitle>
            <IconGrid>
              {icons.map((iconName) => (
                <IconCard
                  key={iconName}
                  onClick={() => handleCopyIcon(iconName)}
                  title={`点击复制: ${iconName}`}
                >
                  <IconWrapper>
                    <Icon name={iconName} />
                  </IconWrapper>
                  <IconName>{iconName}</IconName>
                </IconCard>
              ))}
            </IconGrid>
          </CategorySection>
        ))
      )}

      <CopiedToast show={!!copiedIcon}>✓ 已复制 {copiedIcon}</CopiedToast>
    </Container>
  );
}
