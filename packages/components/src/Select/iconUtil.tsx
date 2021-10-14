import React from 'react';
import { Close, Magnifier, ChevronDown, ChevronUp, Check } from '@kubed/icons';
import { Loading } from '../Loading/Loading';

interface IconProps {
  suffixIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  menuItemSelectedIcon?: React.ReactNode;
  removeIcon?: React.ReactNode;
  loading?: boolean;
  multiple?: boolean;
}
export default function getIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
}: IconProps) {
  const mergedClearIcon = clearIcon || <Close size={16} />;

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = <Loading size={16} />;
  } else {
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open && showSearch) {
        return <Magnifier size={16} />;
      }
      if (open) {
        return <ChevronUp size={16} />;
      }
      return <ChevronDown size={16} />;
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <Check size={16} />;
  } else {
    mergedItemIcon = <Check size={16} />;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = <Close size={16} />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
