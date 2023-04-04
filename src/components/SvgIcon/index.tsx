// svg图标公共组件
import React from 'react';
import Icon from '@ant-design/icons';

import './index.scss';
interface SvgIconProps {
    iconName: string;
    iconClass?: string;
}
const SvgIcon = (props: SvgIconProps): JSX.Element => {
  const { iconName, iconClass } = props;
  // svg组件
  const svgItem = (): JSX.Element => (
    <svg className={`svg-icon ${iconClass}`} aria-hidden="true">
      <use xlinkHref={`#icon-${iconName}`}/>
    </svg>
  );
  return (
    <Icon component={svgItem}/>
  );
};
export default SvgIcon;